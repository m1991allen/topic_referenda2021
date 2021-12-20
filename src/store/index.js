import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        votes: [
            {
                no: '17',
                title: '重啟核四',
                vote_agree: 1,
                vote_disagree: 1,
                isPass: false,
                noPass: false,
                result: '未通過',
            },
            {
                no: '18',
                title: '反萊豬進口',
                vote_agree: 2,
                vote_disagree: 2,
                isPass: false,
                noPass: false,
                result: '未通過',
            },
            {
                no: '19',
                title: '公投綁大選',
                vote_agree: 3,
                vote_disagree: 3,
                isPass: false,
                noPass: false,
                result: '未通過',
            },
            {
                no: '20',
                title: '三接遷離',
                vote_agree: 4,
                vote_disagree: 4,
                isPass: false,
                noPass: false,
                result: '未通過',
            },
        ],
        vote_total: 7000000,
    },
    mutations: {
        vote(state) {
            // eslint-disable-next-line no-undef
            axios
                // .get('https://melect.ftv.com.tw/ElectApi/elect_ftvnews.json')
                .get('https://www.ftvnews.com.tw/topics/referenda2021/poll211218.json')
                .then(function (res) {
                    let resVote = res.data.Data
                    // 票數format
                    let vote_agree = document.querySelectorAll('.agree_vote')
                    let vote_disagree = document.querySelectorAll('.disagree_vote')
                    // 票數linechart
                    let bar_agree = document.querySelectorAll('.agree_bar')
                    let bar_disagree = document.querySelectorAll('.disagree_bar')
                    for (let i = 0; i < resVote.length; i++) {
                        // api新票數 取代 預設票數值
                        state.votes[i].vote_agree = resVote[i].AgreeTickets
                        state.votes[i].vote_disagree = resVote[i].RejectTickets

                        // 票數判定:同意票
                        if (resVote[i].AgreeTickets < 7000000) {
                            bar_agree[i].style.width =
                                Math.floor((resVote[i].AgreeTickets / state.vote_total) * 100) + '%'
                        } else {
                            bar_agree[i].style.width = 100 + '%'
                        }

                        // 票數判定:不同意票
                        if (resVote[i].RejectTickets < 7000000) {
                            bar_disagree[i].style.width =
                                Math.floor((resVote[i].RejectTickets / state.vote_total) * 100) + '%'
                        } else {
                            bar_disagree[i].style.width = 100 + '%'
                        }
                        vote_agree[i].innerText =
                            resVote[i].AgreeTickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票'
                        vote_disagree[i].innerText =
                            resVote[i].RejectTickets.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票'
                    }
                })
                .catch(function (err) {
                    console.log(err)
                })
        },
    },

    actions: {},
    modules: {},
})
