<script setup>
const route = useRoute();
const email = computed(() => route.query.email || '');
</script>

<template>
    <div class="wrapper">
        <div class="thanksWrap">
            <div class="elements">
                <img src="/assets/images/icon-success.svg" alt="aba">
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation mail has been sent to <strong>{{ email }}</strong>. Please open it and click the button inside to confirm your subscription.</p>
                <NuxtLink href="/"><button>Dismiss message</button></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1,
h2,
p,
input,
button,
label,
ul,
li {
    font-family: "Work Sans", sans-serif;
}

.wrapper {
    background-color: hsl(234, 29%, 20%);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .thanksWrap {
        height: auto;
        width: 500px;
        border-radius: 28px;
        background-color: #fff;

        .elements {
            margin: 40px 60px 40px 60px;

            img {
                height: 50px;
            }

            h1 {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 55px;
                color:hsl(234, 29%, 20%);
                margin-top: 24px;
            }

            p {
                margin-top: 24px;
                font-size: 16px;
            }

            button {
                width: 100%;
                margin-top: 24px;
                padding: 18px 0 18px 0;
                border-radius: 8px;
                color: #fff;
                font-weight: 600;
                font-size: 16px;
                cursor: pointer;
                border: none;
                background-color: hsl(234, 29%, 20%);
                transition: all 0.35s ease-in-out;
                &:hover {
                    background-color: hsl(4, 100%, 67%);
                    box-shadow: 0 8px 20px hsl(4, 100%, 67%);
                }
            }
        }
    }
}
</style>