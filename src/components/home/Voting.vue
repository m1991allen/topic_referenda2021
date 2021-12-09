<template>
    <div id="voting" class="voting">
        <h2>{{ title }}</h2>
        <div class="layout">
            <div v-for="(item, index) in voting" :key="index">
                <h3>
                    <span>{{ item.no }}</span>
                    {{ item.title }}
                </h3>
                <p class="status">
                    <span :class="{ pass: item.isPass }">同意</span>
                    <span class="agree_bar"></span>
                    <span class="agree_vote"></span>
                </p>
                <hr />
                <p class="status">
                    <span :class="{ pass: item.noPass }">不同意</span>
                    <span class="disagree_bar"></span>
                    <span class="disagree_vote"></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Voting',
    data() {
        return {
            title: '即時開票',
        }
    },

    computed: {
        // 存於store的陣列votes
        voting() {
            return this.$store.state.votes
        },
    },

    mounted() {
        this.$store.commit('vote')
    },
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 450px) {
    .layout {
        grid-template-columns: 1fr;
    }
}

.layout div {
    margin: 1rem;
    padding: 1rem;
    background-color: #f7f7f5;
    box-shadow: 3px 2px 6px #c4c4c4;
}

h3 {
    font-size: 1.2rem;
}

h3 span {
    border: 1px solid #1c4372;
    border-radius: 50%;
    padding: 0.3rem 0.4rem;
    background-color: white;
}

.agree_bar {
    background-color: #1c4372;
    display: block;
    width: 80%;
    height: 20px;
}

.disagree_bar {
    background-color: #9da8b2;
    display: block;
    width: 100%;
    height: 20px;
}

.pass {
    background-color: red;
    background: url('../../assets/circle.png');
    background-repeat: no-repeat;
    background-size: contain;
    padding: 15px;
}

.status span:nth-child(1) {
    font-weight: bolder;
}

.status span:nth-child(3) {
    text-align: right;
    display: block;
}
</style>
