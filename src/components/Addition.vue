<template>
    <div class="addition">
        <a
            href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/referenda2021/"
            target="_blank"
        >
            <span id="social_line" data-href="https://www.ftvnews.com.tw/topics/referenda2021/"></span>
        </a>

        <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Freferenda2021&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
            ><span id="social_facebook"></span
        ></a>
        <span id="social_link" @click="getLocalUrl"></span>
    </div>
</template>

<script>
export default {
    methods: {
        getLocalUrl() {
            let e = document.createElement('input'),
                t = window.location.href + '?utm_source=refe2021page&utm_medium=copybutton'
            document.body.appendChild(e),
                (e.value = t),
                e.select(),
                document.execCommand('copy'),
                document.body.removeChild(e),
                alert('網址複製成功!')
        },
    },
}
</script>

<style scoped>
.addition {
    position: fixed;
    top: 5%;
    right: 1px;
    border-radius: 15px;
    padding: 10px 5px;
    background-color: #f7f7f5;
    box-shadow: 1px 2px 3px black;
    z-index: 999;
}

#social_line,
#social_facebook,
#social_link {
    display: block;
    background-size: 36px;
    width: 36px;
    height: 41px;
    background-image: url('../assets/icon_social.png');
    background-repeat: no-repeat;
}

#social_line {
    background-position-y: 0px;
}

#social_facebook {
    background-position-y: -41px;
}

#social_link {
    background-position-y: -81px;
}
</style>
