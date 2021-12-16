<template>
    <div class="tabs">
        <b-tabs content-class="mt-3" fill>
            <b-tab v-for="(item, index) of issue" :key="index" :title="item.title">
                <p id="issue">{{ item.main }}</p>
                <!-- <img :src="item.photo" />
                <p style="text-align: center">提案人 | {{ item.proposer }}</p> -->
                <p>
                    <ul>
                        <li v-for="(item,index) of item.reason" :key="index">{{ item }}</li>
                    </ul>
                </p>
                <a :href="item.lazybag" target="_blank"> <i class="fab fa-2x fa-facebook-square"></i> <span> 懶人包點我</span></a>

                <div class="grid item" v-for="(item, index) of item.politics" :key="index">
                    <div class="party">
                        <img :src="item.party_img" alt="party img" />
                        <p>{{ item.party }}</p>
                    </div>
                    <p class="politics">
                        <span :class="[item.isAgree ? 'agreeClass' : 'disagreeClass']">{{ item.stand }}</span
                        >{{ item.opinion }}
                    </p>
                </div>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data() {
        return {
            issue: [
                {
                    title: `第17案 重啟核四`,
                    main: `您是否同意核四啟封商轉發電？`,
                    photo: require('../../assets/p17.png'),
                    proposer: `核能流言終結者創辦人 黃士修`,
                    reason: [
                        `2018年「以核養綠」公投通過，全國絕對多數民意否決政府的非核家園政策，蔡英文總統仍一意孤行。而行政院長蘇貞昌宣稱重啟核四需耗費6至7年，但前核四廠長王伯輝投書反駁，只要有決心，核四2年內可以放燃料發電，3年內做完熱測試即可商轉。`,
                        `另外，反核人士宣稱，核四有活動斷層，違反美國NRC法規。然而，根據中央地質調查所《核能電廠的區域地質概況》，核四地質區未發現活動斷層，廠址周遭的澳底斷層、貢寮斷層、枋腳斷層與屈尺斷層等，80萬年以來，已不屬於活動斷層。`,
                        `領銜團隊指出，希望由全民共同決定核四的命運，以及台灣的未來。`,
                    ],
                    lazybag:'https://lihi1.cc/jyCTH',
                    politics: [
                        {
                            party: '民進黨',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party1.png'),
                            opinion:
                                '總統蔡英文指出，反核四是民進黨一貫主張，因為地震帶的風險，以及混亂拼裝帶來的安全風險，連馬政府也只能在安全問題長期難解下，選擇封存核四。此外，全國沒有任何一個縣市，願意接受核廢料的永久貯存。當年的疑慮都沒能解決，國民黨卻想利用公投重啟核四，我們不會同意。',
                        },
                        {
                            party: '國民黨',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party2.png'),
                            opinion:
                                '國民黨主席朱立倫表示，國民黨提出的公投案只有「反萊豬」、「公投綁大選」兩案，「重啟核四」與「珍愛藻礁」為民間團體推動，國民黨表示尊重，也予以協助，也希望大家能夠支持，讓民間力量展現出來。',
                        },
                        {
                            party: '時代力量',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party3.png'),
                            opinion:
                                '時代力量於11月4日記者會表示，針對核四商轉，基於核四廠設址地點、拼裝系統問題、核災疏散量能不足、距離首都圈過近、核廢料處理等問題，時代力量主張投下不同意票。',
                        },
                        {
                            party: '民眾黨',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party4.png'),
                            opinion:
                                '民眾黨於自製專題網頁指出，核四數十年來已花費3000億，若要重啟，至少得耗費10年時間、再花費700億元，然而核四重啟商轉有客觀的不可行因素，包括核四廠預定地正下方發現斷層，地震風險高，加上施作過程諸多疏漏，安全問題不經檢驗，貿然商轉風險極高。核三延役可以討論、新型核能技術可以研究，但沒有核安，就沒有核四。',
                        },
                        {
                            party: '台灣基進',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party5.png'),
                            opinion:
                                '台灣基進仁武、鳥松、大樹、大社議員參選人張婷婷表示，核四已經超過20年沒有啟動，就像是久久沒有發動的老車一般，必然出現許多毛病，「老舊拼裝車」的核四沒有辦法解決用電問題，反而是把永遠無法解決的生命安全問題丟給下一代。',
                        },
                    ],
                },
                {
                    title: `第18案 反萊豬進口`,
                    main: `你是否同意政府應全面禁止進口含有萊克多巴胺之乙型受體素豬隻之肉品、內臟及其相關產製品？`,
                    photo: require('../../assets/p18.png'),
                    proposer: `國民黨立委 林為洲`,
                    reason: [
                        `根據研究指出，人體攝食過量萊克多巴胺會造成心悸、嘔吐、頭暈、血壓升高，雖然國際組織《CODEX》訂有殘留標準，但僅有6名受試者，且未針對孩童、老人、心血管疾病患者等高風險族群進行測試，標準也未必適用於國人。`,
                        `此外，政府此次宣佈開放含萊克多巴胺之豬隻進口，決策過程不夠公開透明，形同黑箱，且迴避立院監督；多個地方縣市食品相關的自治條例也和中央不同調，將耗損國力。`,
                    ],
                    lazybag:'https://lihi1.cc/HKRWh',
                    politics: [
                        {
                            party: '民進黨',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party1.png'),
                            opinion:
                                '總統蔡英文指出，美豬進口是國家經貿整體布局的一環，台灣已經展開台美TIFA對話，也已經正式申請加入CPTPP。談判有來有往，美豬只是市場的一種選擇，不是強迫購買，政府也保證基於國際標準、食品安全的前提來做好配套。國民黨想阻擋台灣走向國際，我們不會同意。',
                        },
                        {
                            party: '國民黨',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party2.png'),
                            opinion:
                                '公投提案人、國民黨立委林為洲指出，豬肉為國人主要肉品來源，國際組織《CODEX》雖訂有萊克多巴胺的殘留標準，但未針對孩童、老人、心等高風險族群測試，標準也未必適用於國人。另外，台灣未經談判就開放萊豬，實屬不合理。',
                        },
                        {
                            party: '時代力量',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party3.png'),
                            opinion:
                                '時代力量於11月4日記者會表示，自政府去年宣布開放萊豬進口以來，時代力量的看法始終一致，雖然開放本身涉及對外的經貿關係，然而本質上就是「食安議題」。目前邊境查驗量能嚴重不足，政府承諾的「明確標示」跳票、「產地標示」混亂，萊豬是否進口，政府應先做好食安把關，讓國人安心後再來談。',
                        },
                        {
                            party: '民眾黨',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party4.png'),
                            opinion:
                                '民眾黨於自製專題網頁指出，支持「標示萊豬」，透過「源頭管理、明白標示」，以新增貨號等方式溯源管理，讓消費者可以自由選擇。但政府連這樣基本的承諾都無法做到，因此民眾黨只能在「反萊豬」公投投下同意票，讓萊豬不要來，守護民眾食安最後一道防線。',
                        },
                        {
                            party: '台灣基進',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party5.png'),
                            opinion:
                                '身為護理師的台灣基進林園、大寮議員參選人楊佩樺指出，美豬議題非食品安全問題，以60公斤的成人為例，必須每天吃6公斤豬肉，不斷吃、一直吃，才有可能受到萊克多巴胺的生理影響，「食安」只是國民黨用以阻止台灣與世界、美國貿易的藉口。',
                        },
                    ],
                },
                {
                    title: `第19案 公投綁大選`,
                    main: `你是否同意公民投票案公告成立後半年內，若該期間內遇有全國性選舉時，在符合公民投票法規定之情形下，公民投票應與該選舉同日舉行？`,
                    photo: require('../../assets/p19.png'),
                    proposer: `國民黨立委 江啟臣`,
                    reason: [
                        `現行法若僅以「專設公投日」之方式舉行公投，會降低投票率，在低投票率情形下，公投即使勉強通過，結果也缺乏代表性，不符民主正當性。`,
                        `另外，在行政成本部分，以九合一大選合併辦理為例，若改為全國性公民投票單獨辦理，粗估成本差距暴增六倍，對人民、政府以及公民是「三輸」。`,
                    ],
                    lazybag:'https://lihi1.cc/GANLJ',
                    politics: [
                        {
                            party: '民進黨',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party1.png'),
                            opinion:
                                '總統蔡英文指出，三年前公投綁大選，造成選務混亂，甚至邊開票邊投票的情況，現在國民黨想要故技重施，恢復公投綁大選，我們不同意。',
                        },
                        {
                            party: '國民黨',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party2.png'),
                            opinion:
                                '國民黨於臉書整理「公投綁大選」懶人包，指出民進黨為讓公投與大選脫勾，硬扯2018年選務亂象，但其根本原因在於中選會規劃與執行不力，公投卻反而成代罪羔羊。恢復公投綁大選才有機會讓人民行使直接民權，讓民意直接展現、對抗一黨獨大、濫權與擴權。',
                        },
                        {
                            party: '時代力量',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party3.png'),
                            opinion:
                                '時代力量於11月4日記者會表示，公投是直接民權，執行公投的目的與意義，不僅是投下的一票，而是在投票之前，透過公共討論與對話讓議題更清楚。「公投綁大選」可以促進議題討論，並提高投票率，2018年公投確實有亂象，但政府該做的是檢討改善選務流程，並妥善規劃，而非將公投亂象歸咎於綁大選之上。',
                        },
                        {
                            party: '民眾黨',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party4.png'),
                            opinion:
                                '民眾黨於自製專題網頁指出，公投是直接民主的展現，每個議題都需要細緻討論、與各個社會觀點進行對話，然而藍綠兩黨卻綁架公投，把公投議題弄成「全然支持」與「全然反對」，造成正反意見無法有效溝通。另外，政府原本就針對公投編列獨立預算，單獨舉辦公投並不會造成額外花費，因此民眾黨認為公投應與公職人員選舉脫鉤，才能讓每個社會議題都能獲得充分討論。',
                        },
                        {
                            party: '台灣基進',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party5.png'),
                            opinion:
                                '台灣基進三民區市議員參選人張博洋表示，四年一次的大選就是台灣政黨、總統候選人的統獨忠誠度測驗，在2020年「抗中保台」成為社會主流後，國民黨心虛，為了避免自己親中本質，每四年需被人民放大檢驗一次，才會迫切想將民生議題的公投綁在大選，模糊統獨立場的檢視。',
                        },
                    ],
                },
                {
                    title: `第20案 三接遷離`,
                    main: `您是否同意中油第三天然氣接收站遷離桃園大潭藻礁海岸及海域？`,
                    photo: require('../../assets/p20.png'),
                    proposer: `環境保護人士 潘忠政`,
                    reason: [
                        `藻礁是「藻類」造礁，有別於珊瑚礁的「動物」造礁，成長速度緩慢，分布也不廣。而桃園藻礁是是全球最獨特的藻礁地景及生態系，其中歷經至少7,000年才形成的大潭藻礁，更是精華中的精華，值得保育珍惜並完整留傳給世代子孫。`,
                        `由於政府堅持將中油三接蓋在大潭藻礁海岸及海域，公民團體基於九大理由：「藻礁保育、能源轉型、氣候變遷、文化保存、公共安全、國防安全、國際形象、法治落實、深化民主」，決定提起公投，召喚各界馳援。`
                    ],
                    lazybag:'https://lihi1.cc/I2U2J',
                    politics: [
                        {
                            party: '民進黨',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party1.png'),
                            opinion:
                                '總統蔡英文指出，三接是可以減少空污、均衡南北發電的重要建設。為了藻礁保育，民進黨執政後大幅縮減開發規模，更進一步提出再外推方案。國民黨從來不關心環保，也不在乎減煤，現在卻用這些藉口阻礙能源轉型，製造電力缺口，我們不會同意。',
                        },
                        {
                            party: '國民黨',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party2.png'),
                            opinion:
                                '國民黨今年2月25日於臉書發文，表示國民黨長期以來都非常關心藻礁問題，中油三接開發案縮然縮小到23公頃，但是許多專家學者都指出，對藻礁危害範圍並沒有縮減，因為大部分礁體都在海平面下，接收站工程勢必會破壞藻礁，而人造建物形成的突堤效應，也會直接破壞藻礁的生態鏈，呼籲民眾共同搶救藻礁。',
                        },
                        {
                            party: '時代力量',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party3.png'),
                            opinion:
                                '時代力量於11月4日記者會表示，支持能源轉型政策，但三接不當選址造成諸多疑慮，暫時性的天然氣發電附屬設施，可能永久破壞藻礁海岸；而政府提出「原址外推」方案，觀塘風速強海象不穩，冬季又更為嚴重，恐造成天然氣供應不穩，壓縮空汙季燃煤機組降載空間。',
                        },
                        {
                            party: '民眾黨',
                            isAgree: true,
                            stand: '贊成',
                            party_img: require('../../assets/party4.png'),
                            opinion:
                                '民眾黨於自製專題網頁指出，桃園大潭藻礁已有7600年歷史，藻礁區內發現台灣特有種柴山多杯孔珊瑚，還有許多新品種生物，是台灣重要的種源庫、海洋育嬰房。民眾黨不反對興建天然氣接收站，但在保育生態與能源轉型的權衡下，中油三接選址應有更好的選擇！',
                        },
                        {
                            party: '台灣基進',
                            isAgree: false,
                            stand: '反對',
                            party_img: require('../../assets/party5.png'),
                            opinion:
                                '台灣基進左營、楠梓議員參選人陳子瑜表示，站在高雄人的立場，絕對不同意藻礁公投。中油三接可提供大潭電廠天然氣發電量一年137億度，預估減少500萬噸燃煤，不只有效減輕高雄南電北送的負擔，並且加速能源轉型、改善空氣品質，對高雄來說，這是用電公平、呼吸好空氣的重要一步。',
                        },
                    ],
                },
            ],
        }
    },
}
</script>

<style scoped>
/* 主文  */
.nav-fill .nav-item {
    margin: 0.1rem;
}
.tabs p:nth-child(1) {
    text-align: center;
    color: white;
    background-color: #0f2c49;
    box-shadow: 4px 5px 5px #6e6e6e;
    padding: 1rem;
    max-width: 500px;
    margin: auto;
    font-size: 1.2rem;
    font-weight: bolder;
}

#issue {
    position: relative;
    margin-bottom: 2rem;
}

#issue::before {
    content: '！';
    border-radius: 50%;
    padding: 3px 4px 2px 7px;
    background-color: white;
    color: #0f2c49;
    font-size: 2rem;
    position: absolute;
    top: -15px;
    left: -20px;
    transform: rotate(15deg);
    box-shadow: 4px 3px 5px #1f1f1f;
}

/* 提案人 */
.tabs img {
    max-width: 150px;
    margin: 1rem 0;
}

/* 理由 */
.tabs ul li:nth-child(1)::before{
    content: '理由';
    background: rgb(199, 199, 199);
    padding: 0.5rem;
    margin-right: 0.5rem;
}

.tabs ul li {
    margin: 1rem 0;
}

/* 懶人包 */
a {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-around;
    justify-content: flex-end;
    align-items: center;
}

a span {
    padding-left: .4rem;
}

/* 政黨意見 */
.grid {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 2rem;
    min-height: 200px;
}

@media screen and (max-width: 500px) {
    .grid {
        grid-template-columns: 1fr;
        grid-gap: 0rem;
    }
}

.item {
    background-color: #f7f7f5;
    margin: 1rem 0;
    min-height: 180px;
    border-radius: 10px;
}

.item .party,
.item .politics {
    margin: auto;
    text-align: left;
    padding: 1rem;
    padding-bottom: 0;
}

.item .politics span {
    display: table;
}

.item .party p {
    text-align: center;
    font-weight: bolder;
    margin-bottom: 0;
}

.item .party img {
    max-width: 120px;
    min-width: 100px;
}

.agreeClass {
    background-color: #97c184;
    padding: 0.3rem 1rem;
    color: white;
}

.disagreeClass {
    background-color: #ea868d;
    padding: 0.3rem 1rem;
    color: white;
}

</style>



<style>
.tab-content {
    background-color: #eaeaea;
    padding: 1rem;
    box-shadow: 3px 2px 6px #c4c4c4;

}
.nav-fill .nav-item {
    margin: 0 .1rem
}

ul.nav{
    padding-right: 0;
}
</style>
