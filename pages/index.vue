<template>
<div class="wrapper">
    <div class="welcome">
        <div class="elements">
            <h1>Welcome</h1>
            <p>Here i am making random things.</p>
        </div>
    </div>
</div>
</template>

<style scoped>
.wrapper {
    height: 100vh;
    width: 100%;
    background-color: hsl(234, 29%, 20%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.welcome {
height: 70vh;
max-height: 600px;
max-width: 600px;
width: 100%;
background-color: #fff;
border-radius: 28px;
}

.elements {
    margin-top: 40px;
    text-align: center;
    h1 {
        font-size: 55px;
        color:hsl(234, 29%, 20%);
    }

    p {
        margin-top: 24px;
        font-size: 16px;
}
}
</style>