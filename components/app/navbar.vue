<script setup>
import { ref } from "vue";

const burgerClosed = ref(false);

function burger() {
    burgerClosed.value = !burgerClosed.value;
}
</script>

<template>
    <div class="headerWrap">
        <NuxtLink href="/">
            home
        </NuxtLink>
        <NuxtLink href="/accordion">
            accordion
        </NuxtLink>
        <NuxtLink href="/newsletter">
            newsletter
        </NuxtLink>
        <NuxtLink href="/conferenceTicket">
            conference ticket
        </NuxtLink>
    </div>
    <div class="mobileHeaderWrap">
        <button @click="burger">
            this is button
        </button>
        <Transition>
            <div v-if="burgerClosed" class="menuOverlay">
                <NuxtLink href="/" @click="burger">
                    <p>home</p>
                </NuxtLink>
                <NuxtLink href="/accordion" @click="burger">
                    <p>accordion</p>
                </NuxtLink>
                <NuxtLink href="/newsletter" @click="burger">
                    <p>newsletter</p>
                </NuxtLink>
            </div>
        </Transition>
    </div>
</template>

<style>
.headerWrap {
    width: 100%;
    height: 0;
    display: flex;
}

.headerWrap a {
    z-index: 100;
    padding: 12px;
    color: rosybrown;
    margin: 12px;
    border-radius: 18px;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 700;
    transition: all 150ms ease-in-out;
}

.mobileHeaderWrap {
    display: none;
}

@media (max-width: 768px) {
    .mobileHeaderWrap {
        display: block;
    }

    .menuOverlay {
        z-index: 3;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.95);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .mobileHeaderWrap a {
        z-index: 100;
        color: rosybrown;
        border-radius: 18px;
        text-decoration: none;
        font-family: sans-serif;
        font-weight: 700;
        transition: all 150ms ease-in-out;
        display: block;
        padding: 20px;
        text-align: center;
        font-size: 24px;
    }

    .mobileHeaderWrap button {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 101;
        padding: 10px 20px;
        border-radius: 18px;
        border: none;
    }

    .headerWrap {
        display: none;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all 0.4s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
}
</style>
