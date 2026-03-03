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
                <form action="/newsletter/sucess" class="formWrap">
                    <label for="email">Email address</label>
                    <input type="email" id="email" name="email" placeholder="email@company.com" required   pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$">
                    <button>Subscribe to monthly newsletter</button>
                </form>
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
        font-size: 66px;
        font-weight: 600;
    }

    p {
        margin-top: 24px;
        font-size: 20px;
    }

    ul {
        margin-top: 24px;
        li {
            list-style: none;
            margin-top: 12px;
            font-size: 22px;
        }
        li::before {
            content: '';
            background-image: url(/assets/images/icon-list.svg);
            display: inline-block;
            width: 1em;
            height: 1em;
            margin-right: 1em;
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
    form {
        margin-top: 24px;
        
        label {
            font-weight: 500;
        }

        input {
            margin-top: 8px;
            padding: 18px 0 18px 0;
            border-radius: 8px;
            border: 2px solid hsl(0, 0%,58%);
            text-indent: 22px;
            font-size: 18px;
        }

        input::placeholder {
            text-indent: 22px;
            font-size: 18px;
        }

        button {
            margin-top: 24px;
            padding: 18px 0 18px 0;
            border-radius: 8px;
            background-color: hsl(234, 29%, 20%);
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            border: none;
            transition: all 0.35s ease-in-out;
            &:hover {
                background-color: hsl(4, 100%, 67%);
                box-shadow: 0 8px 20px hsl(4, 100%, 67%);
            }
        }
    }
}

.formWrap {
    display: flex;
    flex-direction: column;
}

/* button {
            margin-top: 24px;
            padding: 18px 0 18px 0;
            border-radius: 8px;
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            border: none;

            background: linear-gradient(
                360deg,
                hsl(342, 100%, 72%) 0%,
                hsl(4, 100%, 67%) 45%,
                hsl(234, 29%, 20%) 60%,
                hsl(234, 29%, 20%) 100%
            );
            background-size: 240% 240%;
            background-position: 100% 0;

            transition: background-position 0.5s ease, box-shadow 0.5s ease;

            &:hover {
                background-position: 0 100%;
                box-shadow: 0 8px 20px hsl(4, 100%, 67%, 0.45);
            }
        } */
</style>