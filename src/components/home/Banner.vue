<template>
    <div class="banner">
        <!-- <a href="#voting">看開票</a> -->
        <img :src="banner_url" />
    </div>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {
            banner_url: require('../../assets/banner.jpg'),
        }
    },
}
</script>

<style scoped>
.banner {
    position: relative;
}

.banner a {
    display: block;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: white !important;
    font-size: 1.4rem;
    border: 1px solid white;
    padding: 1rem;
}

@media screen and (max-width: 800px) {
    .banner a {
        display: none;
    }
}
</style>
