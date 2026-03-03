<template>
    <div class="headerWrap">
        <a href="/"><p>home</p></a>
        <a href="/accordion"><p>accordion</p></a>
        <a href="/newsletter"><p>newsletter</p></a>
    </div>
</template>

<style>
.headerWrap {
    width: 100%;
    height:0;
    display: flex;
}

.headerWrap a {
    z-index: 100;
    padding: 12px;
    color: rosybrown;
    margin: 12px;
    border-radius: 18px;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: 700;
    transition: all 150ms ease-in-out;
}

</style>