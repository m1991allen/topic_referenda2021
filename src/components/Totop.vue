<template>
    <div>
        <i @click="scrollTop" class="fad fa-3x fa-angle-up"></i>
    </div>
</template>

<script>
export default {
    methods: {
        scrollTop() {
            console.log(1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },
}
</script>

<style scoped>
.fa-angle-up {
    position: fixed;
    right: 0px;
    bottom: 4rem;
    border-radius: 15px;
    padding: 5px;
    background-color: #f7f7f5;
    box-shadow: 1px 2px 3px black;
    z-index: 999;
}
</style>
