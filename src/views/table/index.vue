<template>
    <div>Table</div>
</template>

<script>
    import {
        tables
    } from '@/api/api.js'
    export default {
        name: 'Table',
        data() {
            return {};
        },
        mounted(){
            tables({}).then(res=>{
                console.log(res.data);
            })
        }
    }
</script>
<style lang='scss' scoped>
</style>