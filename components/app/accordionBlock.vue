<script setup>
defineProps({
    posts: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div class="faqWrapper">
        <div class="h1wrap">
            <img src="/assets/images/icon-star.svg" alt=""><h1>FAQs</h1>
        </div>
        <AppAccordion
            v-for="post in posts.length ? posts : defaultPosts"
            :key="post.id"
            :title="post.title"
            :content="post.content"
        />
    </div>
</template>

<style scoped>
.faqWrapper {
    height: auto;
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    margin: 0 auto auto auto;
    position: relative;
    z-index: 2;
    border-radius: 18px;
    padding: 20px 20px 60px 20px;
}

.h1wrap {
    display: flex;
    margin: 20px 0 20px 20px;
    gap: 20px;

    font-family: "Work Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
}
</style>
