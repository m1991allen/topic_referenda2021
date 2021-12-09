<template>
    <div id="app">
        <header>
            <div id="logo"><img src="./assets/logo_ftv.png" /> 四大公投資訊專區</div>
            <div id="nav">
                <router-link to="/?utm_source=ftvnews&utm_medium=topicsname&utm_campaign=topicsname#/"
                    >首頁</router-link
                >
                <!-- https://lihi1.cc/ctPN1 -->

                <router-link to="faq?utm_source=ftvnews&utm_medium=faq&utm_campaign=faq#/faq">公投Q&A</router-link>
                <!-- https://lihi1.cc/nqpob -->

                <router-link to="quiz?utm_source=ftvnews&utm_medium=quiz&utm_campaign=quiz#/quiz"
                    >公投小測驗</router-link
                >
                <!-- https://lihi1.cc/kuP3F -->
            </div>
        </header>
        <Addition />
        <Totop />
        <Bottom />
        <router-view />
        <footer>Copyright &copy; 2021 民視新聞網路部 社群中心</footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Addition from '@/components/Addition.vue'
import Bottom from '@/components/Bottom.vue'
import Totop from '@/components/Totop.vue'

export default {
    name: 'App',
    components: {
        Addition,
        Bottom,
        Totop,
    },
    data() {
        return {
            active: false,
        }
    },
}
</script>

<style>
/* css reset */
* {
    scroll-behavior: smooth;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif, '微軟正黑體';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h2 {
    font-size: 1.5rem;
    font-weight: bolder;
    text-align: center;
    margin: 1.5rem 0;
    width: 100%;
}

h3 {
    font-weight: bolder;
}

h2:before,
h2:after {
    content: ' —— ';
}

p {
    letter-spacing: 0.1rem;
    line-height: 2rem;
    text-align: left;
    font-size: 1.1rem;
}

a {
    color: #6c757d !important;
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}

img {
    width: 100%;
}

ul {
    padding: 0 1rem;
    /* padding-left: 0; */
}

ul li {
    list-style: none;
    font-size: 1.1rem;
    padding: 0;
}

/* 頁首 */
header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #1c4372;
    color: white;
    z-index: 999;
    width: 100%;
    position: fixed;
    top: 0;
}

@media screen and (max-width: 700px) {
    header {
        justify-content: flex-start;
        padding-left: 1rem;
    }
}

#logo {
    display: flex;
    align-items: center;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    font-size: 1.2rem;
    margin: 0.5rem 0;
}

#logo img {
    width: 40px;
    margin-right: 1rem;
}

/* 導覽列 */

#nav {
    padding: 30px;
    user-select: none;
}

#nav a {
    font-weight: bold;
    color: white !important;
    padding: 0 1rem;
    transition: 0.3s;
}

#nav a:hover {
    color: #b7deff !important;
}

@media screen and (max-width: 700px) {
    #nav {
        display: none;
    }
}

.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #1c4372 !important;
    border-bottom: 0.3rem solid #1c4372;
    background-color: #eaeaea;
}

.nav-tabs .nav-link {
    background-color: #eaeaea;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
}

/* 漢堡 */
.fa-bars {
    display: none !important;
    cursor: pointer;
}

@media screen and (max-width: 700px) {
    .fa-bars {
        display: block !important;
    }
}

.home {
    margin-top: 56px;
}

.opinion,
.faq {
    margin-top: 7rem;
}

.quiz {
    margin-top: 40px;
}

footer {
    background-color: #1c4372;
    color: white;
    padding: 0.5rem 0;
    display: block;
    width: 100%;
}

@media screen and (max-width: 500px) {
    footer {
        padding-bottom: 4rem;
        opacity: 0;
    }
}
</style>
