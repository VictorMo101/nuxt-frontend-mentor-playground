<script setup>
import { ref } from "vue";

const avatarPreviewUrl = ref(null);
const avatarError = ref("");
const mailError = ref("");

function fileToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function onAvatarChange(event) {
    const input = event.target;
    const file = input.files?.[0];

    if (!file) {
        avatarPreviewUrl.value = null;
        avatarError.value = "";
        return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
        avatarError.value = "Please upload a JPG or PNG image.";
        avatarPreviewUrl.value = null;
        input.value = "";
        return;
    }

    if (file.size > 500 * 1024) {
        avatarError.value = "Image must be 500KB or smaller.";
        avatarPreviewUrl.value = null;
        input.value = "";
        return;
    }

    avatarError.value = "";
    const dataUrl = await fileToDataUrl(file);
    avatarPreviewUrl.value = dataUrl;
}

function onSubmit(event) {
    if (avatarPreviewUrl.value) {
        sessionStorage.setItem("conferenceTicketAvatar", avatarPreviewUrl.value);
    }
    else {
        sessionStorage.removeItem("conferenceTicketAvatar");
    }

    const emailInput = document.querySelector("input[name=\"email\"]");
    const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;

    if (!emailInput.value || !emailRegex.test(emailInput.value)) {
        mailError.value = "Please enter a valid email address";
        event.preventDefault();
        return;
    }

    mailError.value = "";
    event.target.submit();
}

// async function inputError(event) {
//     const input = event.target;
//     const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;

//     if (input.value === "" || !emailRegex.test(input.value)) {
//         mailError.value = "Please enter a valid email address";
//     }
//     else {
//         mailError.value = "";
//     }
// }
</script>

<template>
    <div class="wrapper">
        <div class="contentWrap">
            <span class="contentTop"><img src="/assets/images/conf/logo-mark.svg" alt="conf logo"><p>Coding Conf</p></span>
            <div class="textHeaderWrap">
                <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p>Secure your spot at next year's biggest coding conference.</p>
            </div>
            <form action="/conferenceTicket/success" @submit.prevent="onSubmit">
                <label for="file">Upload avatar</label>
                <input
                    id="file"
                    class="avatarUpload"
                    type="file"
                    name="avatar"
                    accept="image/png,image/jpeg"
                    :class="{ hasPreview: !!avatarPreviewUrl }"
                    :style="avatarPreviewUrl ? { '--avatar-preview': `url(${avatarPreviewUrl})` } : {}"
                    @change="onAvatarChange"
                >
                <span><img src="/assets/images/conf/icon-info.svg" alt=""><p>Upload your photo (JPG or PNG, max size: 500KB).</p></span>
                <p v-if="avatarError" class="avatarError">
                    {{ avatarError }}
                </p>

                <label for="">Full name</label>
                <input
                    id="text"
                    type="text"
                    name="name"
                    maxlength="30"
                >

                <label for="">Email address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    maxlength="30"
                >
                <p v-if="mailError" class="mailError">
                    {{ mailError }}
                </p>

                <label for="">Github username</label>
                <input
                    id="github"
                    type="text"
                    name="github"
                    placeholder="@yourusername"
                    maxlength="30"
                >

                <button class="tester">
                    Generate My ticket
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
h1,
h2,
p,
input,
button,
label,
ul,
li {
    font-family: "Inconsolata", monospace;
}

.wrapper {
    height: 100vh;
    width: 100%;
    background-image:
        url(/assets/images/conf/pattern-squiggly-line-top.svg),
        url(/assets/images/conf/pattern-squiggly-line-bottom-desktop.svg), url(/assets/images/conf/pattern-lines.svg),
        url(/assets/images/conf/pattern-circle.svg), url(/assets/images/conf/background-desktop.png);

    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;

    background-position:
        top 70px right,
        bottom left,
        top,
        center right 220px,
        center;

    display: flex;
    align-items: center;
    justify-content: center;
}

.contentWrap {
    color: #fff;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .contentTop {
        display: flex;
        font-size: 18px;
        font-weight: 700;
        gap: 8px;
        align-items: center;
        margin-bottom: 38px;
        img {
            object-fit: contain;
            height: 18px;
            width: 18px;
        }
    }

    .textHeaderWrap {
        width: 100%;
        max-width: 500px;
        p {
            margin-top: 12px;
            font-size: 14px;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        text-align: left;

        width: 100%;
        max-width: 380px;

        span {
            display: flex;
            gap: 8px;
            font-size: 10px;
            margin-top: 8px;
            font-weight: 400;
            align-items: center;
        }

        label {
            margin-top: 18px;
            margin-bottom: 8px;
        }

        input {
            padding: 12px;
            background-color: #d2d1d620;
            border: solid 1px #d2d1d690;
            backdrop-filter: blur(2px);
            border-radius: 8px;
            color: #fff;
            width: 100%;
            max-width: 380px;

            &::placeholder {
                color: #fff;
            }
        }

        button {
            margin-top: 18px;
            background-color: hsl(7, 88%, 67%);
            padding: 12px;
            border-radius: 8px;
            font-weight: 700;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease-in;

            width: 100%;
            max-width: 380px;

            &:hover {
                background-color: hsl(7, 71%, 60%);
            }
        }
    }
}

input[type="file"]::file-selector-button {
    display: none;
}

.avatarUpload {
    border: dashed 1px #d2d1d690 !important;
    width: 100%;
    cursor: pointer;
}

.avatarUpload::before {
    display: block;
    place-self: center;
    content: "";
    width: 40px;
    height: 40px;
    background-color: #d2d1d620;
    border: 1px solid #d2d1d620;
    border-radius: 8px;
    background-image: var(--avatar-preview, url(/assets/images/conf/icon-upload.svg));
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
}

.avatarUpload.hasPreview::before {
    background-size: cover;
}

.avatarUpload::after {
    display: block;
    place-self: center;
    margin-top: 12px;
    content: "Drag and drop or click to upload";
}

.avatarError {
    margin-top: 8px;
    color: hsl(7, 88%, 67%);
    font-size: 12px;
}

.mailError {
    margin-top: 8px;
    color: hsl(7, 88%, 67%);
    font-size: 12px;
}
</style>
