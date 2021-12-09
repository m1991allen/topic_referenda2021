<template>
    <div class="opinion">
        <h2>{{ title }}</h2>
        <img :src="table_img" alt="opinion table" />
    </div>
</template>

<script>
export default {
    name: 'Opinion',
    data() {
        return {
            title: '一圖看懂各政黨主張',
            table_img: require('../../assets/table_opinion.png'),
        }
    },
}
</script>

<style scoped></style>
