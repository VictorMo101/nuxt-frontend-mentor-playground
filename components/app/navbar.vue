<script setup>
import { ref } from 'vue';

let burgerClosed = ref(false);

const burger = () => {
    burgerClosed.value = !burgerClosed.value;
}

</script>

<template>
    <div class="headerWrap">
        <NuxtLink href="/"><p>home</p></NuxtLink>
        <NuxtLink href="/accordion"><p>accordion</p></NuxtLink>
        <NuxtLink href="/newsletter"><p>newsletter</p></NuxtLink>
    </div>
    <div class="mobileHeaderWrap">
        <button @click="burger"> this is button</button>
        <div v-if="burgerClosed">
            <NuxtLink href="/"><p>home</p></NuxtLink>
            <NuxtLink href="/accordion"><p>accordion</p></NuxtLink>
            <NuxtLink href="/newsletter"><p>newsletter</p></NuxtLink>
        </div>
    </div>
</template>

<style>
.headerWrap {
    width: 100%;
    height:0;
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

    .headerWrap {
        display: none;
    }
}
</style>