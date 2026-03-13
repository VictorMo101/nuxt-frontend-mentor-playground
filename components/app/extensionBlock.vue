<script setup>
import data from "/data.json" with { type: "json" };
</script>

<template>
    <div v-for="item in data" :key="item.name">
        <div>{{ item.name }}</div>
        <img :src="item.logo" :alt="item.name" />
    </div>
</template>
