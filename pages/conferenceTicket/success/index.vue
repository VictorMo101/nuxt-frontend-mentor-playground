<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import defaultAvatar from "~/assets/images/conf/image-avatar.jpg";

const route = useRoute();

const email = computed(() => route.query.email || "email@example.com");
const fullName = computed(() => route.query.name || "Guest");
const githubUser = computed(() => route.query.github || "username");
const avatarUrl = computed(() => route.query.avatar || defaultAvatar);
</script>

<template>
    <div class="wrapper">
        <div class="thanksWrap">
            <div class="elements">
                <img
                    :src="avatarUrl"
                    class="user-avatar"
                >

                <h1>Congrats, {{ fullName }}!</h1>

                <p>
                    Your ticket is ready! We've sent a copy to
                    <strong>{{ email }}</strong> and linked it to your GitHub
                    <strong>@{{ githubUser }}</strong>.
                </p>

                <NuxtLink to="/">
                    <button>Dismiss message</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
