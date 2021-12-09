<template>
    <div class="faq">
        <div class="inner">
            <Qa />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Qa from '@/components/faq/Qa.vue'

export default {
    name: 'Faq',
    components: {
        Qa,
    },
}
</script>
