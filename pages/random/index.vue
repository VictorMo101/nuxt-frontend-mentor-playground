<script setup>
import { ref } from "vue";

const a = ref(true);
const b = ref(false);
const c = ref(false);

function clickOne() {
    a.value = !a.value;
    b.value = false;
    c.value = false;
    if (a.value === false) {
        a.value = true;
    }
}

function clickTwo() {
    b.value = !b.value;
    a.value = false;
    c.value = false;
    if (b.value === false) {
        b.value = true;
    }
}

function clickThree() {
    c.value = !c.value;
    a.value = false;
    b.value = false;
    if (c.value === false) {
        c.value = true;
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="box">
            <div class="buttonWrap">
                <button :class="{ open: a }" @click="clickOne()">
                    a
                </button>
                <button :class="{ open: b }" @click="clickTwo()">
                    b
                </button>
                <button :class="{ open: c }" @click="clickThree()">
                    c
                </button>
            </div>
            <div class="contentWrap">
                <div v-if="a">
                    a
                </div>
                <div v-if="b">
                    b
                </div>
                <div v-if="c">
                    c
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: hsl(234, 29%, 20%);
    height: 100vh;
    max-height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    background-color: hsl(234, 29%, 50%);
    height: 200px;
    width: 200px;
}

.buttonWrap {
    display: flex;
    button {
        width: 100%;
        border: none;
        &.open {
            color: #fff;
        }
    }
}

.contentWrap {
    height: 100%;
    div {
        background-color: hsl(292, 16%, 49%);
        width: 100%;
        height: 100%;
        text-align: center;
    }
}

.open {
    background-color: hsl(292, 16%, 49%);
}
</style>
