<template>
    <div class="info">
        <h2>{{ title }}</h2>
        <div
            class="infogram-embed"
            data-id="3ee9b552-7b16-4c1b-8bf0-062e3c6d256c"
            data-type="interactive"
            data-title="四大公投 - 歷年公投結果"
        ></div>
        <div
            style="
                padding: 8px 0;
                font-family: Arial !important;
                font-size: 13px !important;
                line-height: 15px !important;
                text-align: center;
                border-top: 1px solid #dadada;
                margin: 0 30px;
            "
        ></div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            title: '歷年公投結果',
        }
    },
}
</script>

<style scoped></style>
