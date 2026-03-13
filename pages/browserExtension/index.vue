<script setup>
import { computed, ref } from "vue";

import data from "/data.json" with { type: "json" };
import logoDark from "/public/browext/icon-moon.svg";
import logoLight from "/public/browext/icon-sun.svg";
import logoIcon from "/public/browext/logo.svg";

const light = ref(false);
const themeSwitch = () => {
    light.value = !light.value;
};

const checkValue = ref("all");
const extensions = ref(data.map(item => ({ ...item })));

const filteredExtensions = computed(() => {
    if (checkValue.value === "active")
        return extensions.value.filter(i => i.isActive);
    if (checkValue.value === "inactive")
        return extensions.value.filter(i => !i.isActive);
    return extensions.value;
});

const removeClick = (name) => {
    extensions.value = extensions.value.filter(item => item.name !== name);
};
</script>

<template>
    <div class="wrapper">
        <div class="actions">
            <div class="topBar">
                <img :src="logoIcon" alt="" class="logo">
                <div class="lightDark" @click="themeSwitch">
                    <Transition name="icon-fade" mode="out-in">
                        <img v-if="light" :src="logoDark" alt="">
                        <img v-else :src="logoLight" alt="">
                    </Transition>
                </div>
            </div>
            <div class="sort">
                <p>Extensions List</p>
                <div>
                    <label class="allCheck">
                        <input v-model="checkValue" value="all" type="radio" name="checkValue" checked>
                        <span class="all">All</span>
                    </label>

                    <label class="activeCheck">
                        <input v-model="checkValue" value="active" type="radio" name="checkValue">
                        <span class="active">Active</span>
                    </label>

                    <label class="inactiveCheck">
                        <input v-model="checkValue" value="inactive" type="radio" name="checkValue">
                        <span class="inactive">Inactive</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="extensionWrapper">
            <div v-for="item in filteredExtensions" :key="item.name" class="extensions">
                <div class="upperExtensions">
                    <img :src="item.logo" :alt="item.name" class="icons" />
                    <span class="upperText"><h2>{{ item.name }}</h2><p>{{ item.description }}</p></span>
                </div>
                <div class="lowerExtension">
                    <button class="removeButton" @click="removeClick(item.name)">
                        Remove
                    </button>

                    <label class="switch">
                        <input v-model="item.isActive" type="checkbox" role="switch" />
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2,
p,
span,
button {
    font-family: "Noto Sans", sans-serif;
}

.wrapper {
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #040918 0%, #091540 100%);
    .actions {
        margin-top: 120px;
        max-width: 1200px;
        width: 100%;
        padding: 0 20px 0 20px;
        .topBar {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 60px;
            padding: 10px;
            border-radius: 18px;
            background-color: hsl(226, 25%, 17%);
            .logo {
                height: 100%;
            }
            .lightDark {
                height: 100%;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: hsl(225, 23%, 24%);
                border-radius: 18px;
                cursor: pointer;
            }
        }
        .sort {
            margin: 40px 0 20px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            max-width: 100%;
            min-height: 60px;
            font-size: clamp(20px, 3vw, 32px);
            font-weight: 600;
            color: #fff;
            flex-wrap: wrap;

            > div {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }

            input {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
            }

            .allCheck,
            .activeCheck,
            .inactiveCheck {
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-height: 32px;
                width: auto;
            }

            .all,
            .active,
            .inactive {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 9px 18px;
                border-radius: 999px;
                background: hsl(225, 23%, 24%);
                border: 1px solid hsl(226, 11%, 37%);
                font-size: 14px;
                line-height: 1;
                white-space: nowrap;
                cursor: pointer;
                font-weight: 300;
            }
            input:checked + .all {
                background: hsl(3, 86%, 64%);
                color: hsl(227, 75%, 14%);
                border: none;
            }
            input:checked + .active {
                background: hsl(3, 86%, 64%);
                color: hsl(227, 75%, 14%);
                border: none;
            }
            input:checked + .inactive {
                background: hsl(3, 86%, 64%);
                color: hsl(227, 75%, 14%);
                border: none;
            }
        }
    }
    .extensionWrapper {
        display: grid;
        grid-template-columns: repeat(3, minmax(240px, 1fr));
        justify-items: center;
        gap: 14px;
        max-width: 1200px;
        width: 100%;
        padding: 0 20px 0 20px;

        .extensions {
            display: grid;
            grid-template-rows: 82% 18%;
            height: 240px;
            min-width: 200px;
            width: 100%;
            background-color: hsl(226, 25%, 17%);
            border: 1px solid hsl(226, 11%, 37%);
            border-radius: 18px;
            color: #fff;
            padding: 16px;
            .icons {
                height: 60px;
                width: 60px;
            }
            .upperExtensions {
                display: flex;
                gap: 18px;
                .upperText {
                    h2 {
                        font-size: 22px;
                        color: #fff;
                    }
                    font-size: 14px;
                    font-weight: 300;
                    color: hsl(0, 0%, 78%);
                }
            }
            .lowerExtension {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .removeButton {
                    padding: 6px 12px;
                    border-radius: 22px;
                    color: #fff;
                    background-color: hsl(226, 25%, 17%);
                    border: 1px solid hsl(226, 11%, 37%);
                    cursor: pointer;
                }

                .switch {
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 24px;

                    input {
                        position: absolute;
                        opacity: 0;
                        width: 0;
                        height: 0;
                    }

                    .slider {
                        position: absolute;
                        inset: 0;
                        background: hsl(226, 11%, 37%);
                        border-radius: 999px;
                        cursor: pointer;
                        transition: background 0.2s ease;

                        &::before {
                            content: "";
                            position: absolute;
                            width: 18px;
                            height: 18px;
                            left: 3px;
                            top: 3px;
                            border-radius: 50%;
                            background: white;
                            transition: transform 0.2s ease;
                        }
                    }

                    input:checked + .slider {
                        background: hsl(3, 86%, 64%);
                    }

                    input:checked + .slider::before {
                        transform: translateX(20px);
                    }

                    input:focus-visible + .slider {
                        outline: 2px solid #fff;
                        outline-offset: 2px;
                    }
                }
            }
        }
    }
}

.icon-fade-enter-active,
.icon-fade-leave-active {
    transition: opacity 0.15s ease;
}
.icon-fade-enter-from,
.icon-fade-leave-to {
    opacity: 0;
}
</style>
