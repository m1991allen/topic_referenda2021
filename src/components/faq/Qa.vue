<template>
    <div class="qa">
        <h2>
            {{ subtitle }}
        </h2>
        <div v-for="(item, index) of qa" :key="index" class="frame">
            <h3><i class="fas fa-question-circle"></i> {{ item.q }}</h3>
            <ul>
                <li v-for="(item, index) of item.a" :key="index" v-html="item"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Qa',
    data() {
        return {
            isActive: false,
            count: 0,
            subtitle: '公投Q&A',
            qa: [
                {
                    q: `誰有投票資格？`,
                    a: [
                        `<span style="color:red; font-weight:bold">年滿18歲</span>且未受監護宣告者，並在各直轄市、縣（市）繼續居住6個月以上，為全國性公民投票案投票權人。`,
                    ],
                },
                {
                    q: `公投投票需要攜帶什麼？`,
                    a: [
                        `投票時需攜帶<span style="color:red; font-weight:bold">國民身分證</span>、<span style="color:red; font-weight:bold">印章</span>及<span style="color:red; font-weight:bold">投票通知單</span>，如未攜帶投票通知單，務請記住投票通知單上之名冊號次，於領票時告知發票管理員。國民身分證如有遺失，請於投票日前至戶籍地戶政事務所申請補發（投票當日，戶政事務所不受理換發國民身分證）。`,
                    ],
                },
                {
                    q: `公投通過的門檻是什麼？`,
                    a: [
                        `《公投法》第29條規定，需有效同意票數多於不同意票，且有效同意票達投票權人總額四分之一以上者，即為通過公投案。而根據中選會造冊統計，今年投票權人數初步估算1982萬5468人，<span style="color:red; font-weight:bold">通過門檻495萬6367票</span>。`,
                    ],
                },
                {
                    q: `公投通過後會怎樣？`,
                    a: [
                        `根據《公投法》第30條規定，「重啟核四」、「反萊豬進口」、「三接遷離」屬<span style="color:red; font-weight:bold">重大政策之創制案或複決案</span>，應由總統或權責機關為實現該公民投票案內容之必要處置。`,
                        `「公投綁大選」屬<span style="color:red; font-weight:bold">立法原則創制案</span>，行政院應於3個月內研擬相關之法律提案，並送立法院審議，立法院應在下一會期休會前完成審議程序。 `,
                        `若公投案沒通過，主管機關公告結果起2年內，不得就同一事項重行提出；同一事項認定由主管機關為之。`,
                    ],
                },
                { q: `公投有哪些重要日程？`, a: [``] },
            ],
            timeline: require('../../assets/timeline.png'),
        }
    },
    methods: {
        insertImg() {
            let img = document.querySelector('.frame:nth-last-child(1) ul li')
            img.innerHTML += `<img src="https://www.ftvnews.com.tw/topics/referenda2021/img/timeline.5c6ec15e.png" style="max-width:400px; text-align:center;" alt="timeline" />`
        },
    },
    mounted() {
        this.insertImg()
    },
}
</script>

<style scoped>
h3 {
    font-size: 1.2rem;
    padding: 2rem 0;
}

ul li {
    text-align: left;
    margin-bottom: 1rem;
}

.frame {
    border: 1px solid #1c4372;
    border-radius: 30px;
    margin: 1rem;
    padding: 1rem;
}

.frame:nth-last-child(1) ul li {
    text-align: center;
}

.frame:nth-last-child(2) ul li:nth-child(1) {
    margin-bottom: 1rem;
}
</style>
