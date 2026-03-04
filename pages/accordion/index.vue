<script setup>
    const posts = ref([
  { id: 1, title: 'My journey with Vue', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 2, title: 'Blogging with Vue', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 3, title: 'Why Vue is so fun', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 4, title: 'labubu mixtape', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 5, title: 'among us the reckoning', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 6, title: 'this title is longer for no reason other than i felt like it even longer', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 7, title: 'why', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 8, title: 'testing this test', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 9, title: 'boohoo', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 10, title: 'sims caught woohooing in the street', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
  { id: 11, title: 'obama', content: 'fontend mentor offers realistic coding challenges to help developers. improve their frontend codingskills with projects in html css and javascript its stuiable for all levels and ideal for portfolio building' },
])
</script>

<template>
<div class="wrapper">
    <div class="bgcol">
        <img src="/assets/images/background-pattern-desktop.svg" alt="background pattern" class="bgimg">
        <div class="accWrap"><AppAccordionBlock :posts="posts"></AppAccordionBlock></div>
    </div>
</div>
<NuxtLink href="/accordion/labubuacc">go to 2</NuxtLink>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}
.bgimg {
    width: 100%;
    position: relative;
    z-index: 1;
}
.bgcol {
    width: 100%;
    height: 100vh;
    background-color: hsl(275, 100%, 97%);
}

.accWrap {
    margin-top: -140px;
}

@media (max-width: 800px) {
    .accWrap {
        margin: -60px 20px auto;
    }
}

@media (max-width: 550px) {
    .accWrap {
        margin: 10px 20px auto;
    }
}
</style>