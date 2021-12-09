<template>
    <div class="poll">
        <form ref="pollForm">
            <div
                data-tf-widget="Ss5xJ3oP"
                data-tf-iframe-props="title=四大公投意見調查｜民視新聞"
                style="width: 100%; height: 600px"
            ></div>
        </form>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Poll',
    data() {
        return {}
    },
    mounted() {
        let foo = document.createElement('script')
        foo.setAttribute('src', '//embed.typeform.com/next/embed.js')
        foo.setAttribute('data-transaction-amount', '14.90')
        this.$refs.pollForm.appendChild(foo)
    },
}
</script>

<style scoped></style>
