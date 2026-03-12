<script setup>
import { onMounted, ref } from "vue";

const adviceData = ref();

const pee = ref(false);

const dataFetch = () => {
    fetch("https://api.adviceslip.com/advice")
        .then(data => data.json())
        .then((myData) => {
            adviceData.value = myData.slip;
        });
};

const onClick = () => {
    dataFetch();
    pee.value = true;
    setTimeout(() => {
        pee.value = false;
    }, 2000);
};

onMounted(() => {
    dataFetch();
});
</script>

<template>
    <div class="wrapper">
        <div class="adviceWrapper">
            <span class="adviceSpan"><p>ADVICE</p><p>#{{ adviceData?.id }}</p></span>
            <p class="adviceText">
                “{{ adviceData?.advice }}”
            </p>
            <div class="line"></div>
            <button
                v-if="!pee"
                class="randomizer"
                @click="onClick()"
            ></button>
            <Transition name="load">
                <p v-if="pee" class="load">
                    loading...
                </p>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
p {
    font-family: "Manrope", sans-serif;
}

.load-enter-active,
.load-leave-active {
    transition: transform 0.5s ease;
}

.load-enter-from,
.load-leave-to {
    transform: scale(0%);
}

.wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(218, 23%, 16%);

    .adviceWrapper {
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 280px;
        width: min(480px, 90%);
        background-color: hsl(217, 19%, 24%);
        flex-direction: column;
        position: relative;
        padding: 36px;
        box-sizing: border-box;
        .adviceSpan {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            font-size: 10px;
            color: hsl(150, 100%, 66%);
            font-weight: 800;
            letter-spacing: 6px;
        }
        .line {
            width: 100%;
            margin: 24px 0 24px 0;
            height: 16px;
            flex-shrink: 0;
            background-color: hsl(217, 19%, 24%);
            background-image: url(/assets/images/advice/pattern-divider-desktop.svg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }
        .load {
            color: hsl(218, 23%, 16%);
            position: absolute;
            width: 100px;
            height: 50px;
            background-color: hsl(150, 100%, 66%);
            bottom: -25px;
            border-radius: 12px;
            text-align: center;
            place-content: center;
            font-weight: 700;
        }
        .randomizer {
            background-image: url(/assets/images/advice/icon-dice.svg);
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            width: 50px;
            height: 50px;
            background-color: hsl(150, 100%, 66%);
            bottom: -25px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            box-sizing: content-box;
            transition: transform 0.05s ease-in-out;
            transition: box-shadow 0.2s ease-in-out;
            &:active {
                transform: scale(0.95);
            }
            &:hover {
                box-shadow: 0 0 30px hsl(150, 100%, 66%);
            }
        }
        .adviceText {
            font-size: 28px;
            color: hsl(193, 38%, 86%);
            text-align: center;
            margin-top: 16px;
        }
    }
}
</style>
