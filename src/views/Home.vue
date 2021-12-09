<template>
    <div class="home">
        <Banner />
        <div class="inner">
            <!-- <Voting /> -->
            <!-- <VoteResult /> -->
            <Tabs />
            <Opinion />
            <Info />
            <!-- <Poll /> -->
            <News />
            <Video />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import Voting from '@/components/home/Voting.vue'
// import VoteResult from '@/components/home/VoteResult.vue'

import Banner from '@/components/home/Banner.vue'
import Tabs from '@/components/home/Tabs.vue'
import Opinion from '@/components/home/Opinion.vue'
// import Poll from '@/components/home/Poll.vue'
import News from '@/components/home/News.vue'
import Video from '@/components/home/Video.vue'
import Info from '@/components/home/Info.vue'

export default {
    name: 'Home',
    components: {
        // Voting,
        // VoteResult,
        Banner,
        Tabs,
        Opinion,
        Info,
        // Poll,
        News,
        Video,
    },
}
</script>

<style>
.inner {
    max-width: 1000px;
    margin: auto;
}

.inner > div {
    margin: 3rem 1rem;
}
</style>
