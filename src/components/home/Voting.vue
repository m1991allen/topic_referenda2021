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
                    <span :class="{ pass: item.isPass }"
                        >同意<i class="fad fa-lg fa-info-circle" @mouseover="mouseMove" @mouseleave="mouseLeave"></i
                    ></span>
                    <span class="threshold"></span>
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
            event.path[1].insertAdjacentHTML(
                'afterend',
                `<span id="info"
                        style="position: absolute;
                        top:30%;
                        left:0;
                        max-width: 310px;
                        z-index: 999;
                        background-color: #ffffffed;
                        padding: 1rem 0.6rem;
                        border-radius: 20px;
                        box-shadow: 1px 2px 3px #bdbdbd;">
                通過門檻為：
                <span style="display: block;">1.同意票高於
                    <span style="color: #d92828">495萬6367票</span><span>，且</span>
                </span>
                <span style="display: block;">2.同意票大於不同意票</span>
            </span>`
            )
        },

        mouseLeave() {
            this.active = false
            let info = document.getElementById('info')
            info.parentNode.removeChild(info)
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
@media screen and (max-width: 500px) {
    .layout {
        grid-template-columns: 1fr;
    }
}

.status {
    position: relative;
}

.status i {
    cursor: pointer;
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

.threshold {
    width: 100%;
    position: relative;
    display: block;
}

.threshold::after {
    content: ' ↓門檻';
    font-size: 0.8rem;
    font-weight: bolder;
    position: absolute;
    top: -22px;
    left: 71%;
    color: #c40c0c;
    font-family: 'FontAwesome';
    cursor: pointer;
}
</style>
