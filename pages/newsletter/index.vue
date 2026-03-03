<template>
    <div class="wrapper">
        <div class="newsWrapper">
            <div class="newsImg">
                <img src="/assets/images/illustration-sign-up-desktop.svg" alt="">
            </div>
            <div class="newsForm">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a sucess</li>
                    <li>And much more!</li>
                </ul>
                <form action="" class="formWrap">
                    <label for="">Email address</label>
                    <input type="text" placeholder="email@company.com" required>
                    <button>Subscribe to monthly newsletter</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-color: hsl(234, 29%, 20%);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsWrapper {
    height: 700px;
    width: 1200px;
    background-color: #fff;
    border-radius: 28px;
    margin: 20px;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
    overflow: hidden;
}

.newsImg {  
    grid-column: 8 / span 5;
    grid-row: 1;
    background-color: red;
    margin: 24px;
    border-radius: 18px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
}

.newsForm {
    grid-column: 1 / span 7;
    grid-row: 1;
    margin: 100px 70px 100px 70px;

    h1 {
        font-size: 64px;
    }

    ul {
        li {
            list-style: none;
        }
        li::before {
            content: '';
            background-image: url(/assets/images/icon-list.svg);
            display: inline-block;
            width: 1em;
            height: 1em;
            margin-right: 0.5em;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
}

.formWrap {
    display: flex;
    flex-direction: column;
}

</style>