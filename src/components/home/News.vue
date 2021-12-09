<template>
    <div class="news">
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="(tag, index) of tags_show" :key="index" :title="tag" @click="change_ftvNews()">{{ tag }}</li>
        </ul>
        <div class="grid">
            <div class="item" v-for="item of newsInfo" :key="item.id">
                <a :href="'https://www.ftvnews.com.tw/news/detail/' + item.ID" target="blank">
                    <div>
                        <img :src="item.Image" alt="Photo cover" />
                    </div>
                    <div>
                        <h3 class="title">{{ item.Title }}</h3>
                    </div>
                    <div>
                        <p>{{ item.CreateDate }}</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="btn_more">
            <a href="https://www.ftvnews.com.tw/tag/%E5%85%AC%E6%8A%95/" target="blank">看更多</a>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            title: '相關新聞',
            newsInfo: [],
            tags: ['公投', '核四', '萊豬', '公投綁大選', '三接'],
            tags_show: ['公投', '重啟核四', '反萊豬進口', '公投綁大選', '三接遷離'],
        }
    },
    methods: {
        getData_ftvNews(tag) {
            // eslint-disable-next-line no-undef
            axios
                .get(`https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=${tag}&Page=1&sp=6`)
                .then((response) => {
                    // console.log(response)
                    let data = response.data.ITEM
                    data.forEach((item) => {
                        this.newsInfo.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        },
        change_ftvNews() {
            let tag = event.currentTarget.innerText
            document.querySelectorAll('.item').forEach((e) => e.remove())
            if (tag === '重啟核四') {
                tag = '核四'
            } else if (tag === '反萊豬進口') {
                tag = '萊豬'
            } else if (tag === '三接遷離') {
                tag = '三接'
            }
            this.getData_ftvNews(tag)
        },
    },
    mounted() {
        this.getData_ftvNews(this.tags[0])
    },
}
</script>

<style scoped>
/* 新聞樣式 */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
}

@media screen and (max-width: 700px) {
    .grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 450px) {
    .grid {
        grid-template-columns: 1fr;
    }
    .item {
        max-width: 300px;
        margin: auto;
    }
    .item img {
        width: auto;
    }
}

.item a {
    transition: 0.3s;
}

.item p {
    text-align: left;
    margin: 20px 0 0 0;
    padding: 0.3rem;
    font-weight: lighter;
}

.item div:nth-child(1) {
    height: 165px;
    overflow-y: hidden;
    border-bottom: 3px solid #d54426;
}

.item div:nth-child(2) {
    max-height: 40px;
}

.item div:nth-child(3) p {
    font-size: 0.8rem;
}

.item img {
    width: 100%;
}

.title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* 解決firefox不支援-webkit-line-clamp的問題 */
    line-height: 30px;
    min-height: 60px;
    text-align: left;
    font-size: 1.1rem;
    font-weight: normal;
}

.btn_more {
    display: inline-block;
    background-color: #1c4372;
    padding: 0.6rem;
    margin: 0.6rem;
    font-weight: bolder;
    cursor: pointer;
    user-select: none;
}

.btn_more a {
    color: white !important;
}

/* hashtag樣式 */
ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
}

@media screen and (max-width: 700px) {
    ul {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (max-width: 450px) {
    ul {
        grid-template-columns: 1fr 1fr;
    }
}

ul li {
    background-color: #0f2c49;
    color: white;
    border-radius: 50rem;
    padding: 0.3rem;
    cursor: pointer;
}
</style>
