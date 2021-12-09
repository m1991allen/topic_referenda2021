<template>
    <div class="video">
        <h2>{{ title }}</h2>
        <div class="iframe-container">
            <iframe
                src="https://www.youtube.com/embed/XxJKnDLYZz4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Video',
    data() {
        return {
            title: '新聞直播',
        }
    },
}
</script>

<style scoped>
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    margin-bottom: 1rem;
}
.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

/* 4x3 縱橫比 */
.iframe-container-4x3 {
    padding-top: 75%;
}
</style>
