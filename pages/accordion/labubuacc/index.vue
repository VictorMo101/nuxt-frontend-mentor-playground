<script setup>
    const posts = ref([
  { id: 1, title: 'My lala bu', content: 'ijo jojoi jojojojoj ojo j' },
  { id: 2, title: 'akak sduud ', content: 'allala papap a awlpd wpdp lwpd pdwpdlwdwlp wdlwl pwldp lwpdl ' },

])

</script>
<template>
    <div class="tete">
        <AppAccordionBlock :posts="posts" class="lalabubu"></AppAccordionBlock>
    </div>
</template>

<style scoped>
.tete {
    height: 100vh;
    width: 100%;
    background-color: blanchedalmond;
}

.lalabubu {
    position: relative;
    top: 200px;
}
</style>