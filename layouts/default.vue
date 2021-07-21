<template>
<div>
    <PageHeader></PageHeader>
    <Nuxt />
    <CellWaves></CellWaves>
    <PageFooter></PageFooter>
</div>
</template>

<script>
import CellWaves from 'com/cell/waves.vue'
import PageHeader from './PageHeader.vue'
import PageFooter from './PageFooter.vue'

export default {
    components: {
        PageHeader,
        PageFooter,
        CellWaves
    }
}
</script>