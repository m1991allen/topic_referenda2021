<template>
    <div class="quiz">
        <form ref="quizForm">
            <div
                id="quizDesktop"
                data-tf-widget="XU2poW4M"
                data-tf-iframe-props="title=公投題目大考驗｜民視新聞網"
                style="width: 100%; height: 1000px"
            ></div>
            <div
                id="quizMobile"
                data-tf-widget="XU2poW4M"
                data-tf-iframe-props="title=公投題目大考驗｜民視新聞網"
                style="width: 100%; height: 450px"
            ></div>
        </form>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Quiz',
    data() {
        return {}
    },
    mounted() {
        let foo = document.createElement('script')
        foo.setAttribute('src', '//embed.typeform.com/next/embed.js')
        foo.setAttribute('data-transaction-amount', '14.90')
        this.$refs.quizForm.appendChild(foo)
    },
}
</script>

<style scoped>
#quizMobile {
    display: none;
}

@media screen and (max-width: 500px) {
    #quizDesktop {
        display: none;
    }
    #quizMobile {
        display: block;
    }
}
</style>
