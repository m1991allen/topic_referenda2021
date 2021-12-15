<template>
    <div id="voting" class="voting">
        <h2 @mousemove="mouseMove()" @mouseleave="mouseLeave()">
            {{ title }} <i class="fad fa-info-circle"></i
            ><span class="info" v-show="active">通過門檻：495萬6367票</span>
        </h2>

        <div class="layout">
            <div v-for="(item, index) in voting" :key="index">
                <h3>
                    <span>{{ item.no }}</span>
                    {{ item.title }}
                </h3>
                <p class="status">
                    <span :class="{ pass: item.isPass }">同意</span>
                    <span class="threshold"> </span>
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
            active: false,
        }
    },

    methods: {
        // 每30秒要求一次票數更新
        keepVoting() {
            setInterval(() => {
                this.$store.commit('vote')
            }, 30000)
        },

        // 門檻
        mouseMove() {
            this.active = true
        },

        mouseLeave() {
            this.active = false
        },
    },

    computed: {
        // 存於store的陣列votes
        voting() {
            return this.$store.state.votes
        },
    },

    mounted() {
        this.$store.commit('vote')
        this.keepVoting()
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

h2 {
    position: relative;
    cursor: pointer;
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
    position: relative;
    animation: progress1 infinite 1s;
}

@keyframes progress1 {
    0% {
        background-color: #3a7ac8;
    }
    50% {
        background-color: #24538c;
    }
    100% {
        background-color: #3a7ac8;
    }
}

.disagree_bar {
    background-color: #eaa200;
    display: block;
    width: 100%;
    height: 20px;
    animation: progress2 infinite 1s;
}

@keyframes progress2 {
    0% {
        background-color: #eaa200;
    }
    50% {
        background-color: #ffbf29;
    }
    100% {
        background-color: #eaa200;
    }
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
    position: relative;
}

.status span:nth-last-child(1) {
    text-align: right;
    display: block;
}

/* 票數門檻樣式 */
.info {
    position: absolute;
    white-space: nowrap;
    background-color: rgb(211, 211, 211);
    padding: 1rem 0.5rem;
    z-index: 999;
    left: 50%;
    top: 110%;
    transform: translateX(-50%);
    font-size: 1.2rem;
}

.threshold {
    width: 100%;
    position: relative;
    display: block;
}

.threshold::after {
    content: '｜門檻';
    font-size: 0.8rem;
    font-weight: bolder;
    position: absolute;
    top: -25px;
    left: 71%;
    color: maroon;
    font-family: 'FontAwesome';
    cursor: pointer;
}
</style>
