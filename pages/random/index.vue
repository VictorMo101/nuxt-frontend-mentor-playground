<script setup lang="ts">
import { ref } from "vue";

const selectedTab = ref("a");

function onClick(tab: string) {
    selectedTab.value = tab;
}
</script>

<template>
    <div class="wrapper">
        <div class="box">
            <div class="buttonWrap">
                <button
                    :class="{ open: selectedTab === 'a' }"
                    @click="onClick('a')"
                >
                    a
                </button>
                <button
                    :class="{ open: selectedTab === 'b' }"
                    @click="onClick('b')"
                >
                    b
                </button>
                <button
                    :class="{ open: selectedTab === 'c' }"
                    @click="onClick('c')"
                >
                    c
                </button>
            </div>
            <div class="contentWrap">
                <div v-if="selectedTab === 'a'">
                    a
                </div>
                <div v-if="selectedTab === 'b'">
                    b
                </div>
                <div v-if="selectedTab === 'c'">
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
