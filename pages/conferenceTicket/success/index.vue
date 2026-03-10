<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import defaultAvatar from "~/assets/images/conf/image-avatar.jpg";

function randomId() {
    return Math.floor(Math.random() * 20000) + 10000;
}

const route = useRoute();

const email = computed(() => route.query.email || "email@example.com");
const fullName = computed(() => route.query.name || "Guest");
const githubUser = computed(() => route.query.github || "username");
const avatarUrl = ref(defaultAvatar);

onMounted(() => {
    const savedAvatar = sessionStorage.getItem("conferenceTicketAvatar");
    if (savedAvatar) {
        avatarUrl.value = savedAvatar;
    }
});
</script>

<template>
    <div class="wrapper">
        <div class="textWrapper">
            <span class="brand">
                <img src="/assets/images/conf/logo-mark.svg">
                <p>Coding Conf</p>
            </span>
            <h1>Congrats, <span class="nameGradient">{{ fullName }}!</span><br>Your ticket is ready.</h1>
            <p class="coolText">
                We've emailed your ticket to<br><span class="WOOOOORD">{{ email }}</span> and will send updates in<br>the run up to the event.
            </p>
        </div>
        <div class="card">
            <div class="topCard">
                <img src="/assets/images/conf/logo-mark.svg">
                <span>
                    <h2>Coding Conf</h2>
                    <p>jan 31 2025 / austin tx</p>
                </span>
            </div>
            <div class="picName">
                <img
                    :src="avatarUrl"
                    class="user-avatar"
                >
                <div class="nameGithub">
                    <p class="name">
                        {{ fullName }}!
                    </p>
                    <span>
                        <img src="/assets/images/conf/icon-github.svg"><p>@{{ githubUser }}</p>
                    </span>
                </div>
            </div>
            <div class="cardId">
                <p>#{{ randomId() }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
p,
h1,
h2 {
    font-family: Inconsolata, monospace;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
}

.textWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .brand {
        display: flex;
        margin-bottom: 80px;
        align-items: center;
        gap: 16px;
        font-weight: 600;
        font-size: 22px;
        img {
            width: 26px;
            height: 26px;
        }
    }
    h1 {
        font-size: 48px;
    }
    .nameGradient {
        background: linear-gradient(90deg, #f37362 0%, #ffffff 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .WOOOOORD {
        color: hsl(7, 71%, 60%);
    }
    .coolText {
        font-weight: 300;
        font-size: 18px;
        margin: 40px 0 100px 0;
    }
}
.card {
    background-image: url(/assets/images/conf/pattern-ticket.svg);
    height: 280px;
    width: 600px;
    display: grid;
    grid-template-columns: 460px 140px;
    grid-template-rows: 1fr;
    padding: 20px;
    .topCard {
        grid-column: 1;
        display: flex;
        img {
            height: 40px;
            width: 40px;
        }
        span {
            margin-left: 16px;
            h2 {
                font-size: 32px;
                font-weight: 600;
            }
            p {
                margin-top: 8px;
                font-weight: 300;
            }
        }
    }
    .picName {
        grid-column: 1;
        display: flex;
        align-items: center;
        .name {
            font-size: 30px !important;
            font-weight: 500 !important;
        }
        img {
            border-radius: 20%;
            height: 100px;
            width: 100px;
        }
        .nameGithub {
            margin-left: 20px;
            p {
                font-size: 18px;
                font-weight: 300;
            }
            span {
                margin-top: 10px;
                gap: 10px;
                display: flex;
                align-items: center;
                img {
                    border-radius: 20px;
                    height: 24px;
                    width: 24px;
                }
            }
        }
    }
    .cardId {
        grid-column: 2;
        grid-row: 1 / span 2;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            transform: rotate(90deg);
            font-size: 26px;
            color: #ffffff40;
        }
    }
}
</style>
