<template>
<div>
    <PageHeader></PageHeader>
    <Nuxt />
    <PageFooter></PageFooter>
</div>
</template>

<script>
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'

export default {
    components: {
        PageHeader,
        PageFooter
    }
}
</script>