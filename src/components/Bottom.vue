<template>
    <div class="bottom">
        <router-link to="/?utm_source=ftvnews&utm_medium=m-topicsname&utm_campaign=m-topicsname#/"
            ><i class="fad fa-box-ballot"></i> 公投內容</router-link
        >
        <!-- https://lihi1.cc/xTl7k -->

        <router-link to="faq?utm_source=ftvnews&utm_medium=m-faq&utm_campaign=m-faq#/faq"
            ><i class="fad fa-comments"></i> Q&A</router-link
        >
        <!-- https://lihi1.cc/pYctY -->

        <router-link to="quiz?utm_source=ftvnews&utm_medium=m-quiz&utm_campaign=m-quiz#/quiz"
            ><i class="fad fa-file-alt"></i> 小測驗</router-link
        >
        <!-- https://lihi1.cc/7mqlA -->
    </div>
</template>

<script>
export default {}
</script>

<style>
.bottom {
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #1c4372;
    z-index: 999;
}
@media screen and (max-width: 500px) {
    .bottom {
        display: flex;
    }
}

.bottom a {
    width: 33.3%;
    padding: 1rem;
    padding: 1rem 0.3rem;
    color: white !important;
}

.bottom a:nth-child(1),
.bottom a:nth-child(2) {
    border-right: 0.1rem solid white;
}
</style>
