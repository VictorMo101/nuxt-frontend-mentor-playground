<template>
    <div class="wrapper">
        <div class="contentWrap">
            <span class="contentTop"><img src="/assets/images/conf/logo-mark.svg" alt="conf logo"><p>Coding Conf</p></span>
            <h1>
                Your Journey to Coding Conf
                2025 Starts Here!
            </h1>
            <p>Secure your spot at next year's biggest coding conference.</p>
            <form action="/conferenceTicket/success">
                <label for="file">Upload avatar</label>
                <input
                    id="file"
                    class="avatarUpload"
                    type="file"
                    name="avatar"
                >
                <span><img src="/assets/images/conf/icon-info.svg" alt=""><p>Upload your photo (JPG or PNG, max size: 500KB).</p></span>

                <label for="">Full name</label>
                <input
                    id="text"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                >

                <label for="">Email address</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="email@company.com"
                >

                <label for="">Github username</label>
                <input
                    id="github"
                    type="text"
                    name="github"
                    placeholder="username"
                >

                <button>Generate my ticket</button>
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

input[type="file"]::file-selector-button {
    display: none;
}

.avatarUpload {
    border: dashed 1px #d2d1d690;
    background-color: #d2d1d640;
    backdrop-filter: blur(2px);
    border-radius: 8px;
    padding: 18px;
    width: 100%;
    cursor: pointer;
}

.avatarUpload::before {
    display: block;
    place-self: center;
    content: "";
    width: 40px;
    height: 40px;
    background-color: #d2d1d640;
    border: 1px solid #d2d1d640;
    border-radius: 8px;
    background-image: url(/assets/images/conf/icon-upload.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
}

.avatarUpload::after {
    display: block;
    place-self: center;
    margin-top: 12px;
    content: "Drag and drop or click to upload";
}

.wrapper {
    height: 100vh;
    width: 100%;
    background-image:
        url(/assets/images/conf/pattern-squiggly-line-top.svg),
        url(/assets/images/conf/pattern-squiggly-line-bottom-desktop.svg), url(/assets/images/conf/pattern-lines.svg),
        url(/assets/images/conf/background-desktop.png);

    background-repeat: no-repeat, no-repeat, repeat, no-repeat;

    background-position:
        top 70px right,
        bottom left,
        center,
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
    }

    form {
        display: flex;
        flex-direction: column;
        text-align: left;

        span {
            display: flex;
        }
    }
}
</style>
