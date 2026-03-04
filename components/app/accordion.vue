<script setup>
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ''
  }
})

let closed = ref(false);
const onClick = () => {
    closed.value = !closed.value;
}
</script>

<template>
<div class="accordionWrapper">
    <div class="clickWrap" @click="onClick()" >
        <h2>{{ title }}</h2>
        <Transition name="fade">
            <img v-if="!closed" src="/assets/images/icon-plus.svg" alt="">
            <img v-else src="/assets/images/icon-minus.svg" alt="">
        </Transition>
        </div>
        <div class="textWrap" :class="{ open: closed }">
            <div class="inner"><p>{{ content }}</p></div>
        </div>
</div>
</template>

<style scoped>
.accordionWrapper {
margin-inline: 20px;
border-bottom: 1px solid hsl(275, 100%, 97%);
padding-top: 20px;
}

.clickWrap {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    justify-content: space-between;

    h2 {
        font-size: 20px;
        font-weight: 600;
        color: hsl(292, 42%, 14%);
        font-family: "Work Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        max-width: 70%;
        width: 100%;
        transition: color 200ms ease-in-out;
    }

    img {
        position: absolute;
        right: 40px;
        
    }
}

.clickWrap:hover {
    h2{color: hsl(292, 16%, 49%);}
}

.textWrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.5s ease-out; 
    p {
        font-family: "Work Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        color: hsl(292, 16%, 49%);
        line-height: 24px;
        font-size: 16px;
        font-weight: 400;
        padding-bottom: 20px;
    }
}

.inner {
    overflow: hidden;
}

.textWrap.open {
grid-template-rows: 1fr;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>