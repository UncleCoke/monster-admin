<template>
    <div class="header">
        <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold','foldIcon']" @click="setFold"></i>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'Header',
        data() {
            return {

            }
        },
        computed:{
            ...mapGetters('setting',['isCollapse'])
        },
        methods:{
            ...mapActions('setting',['setIsCollapse']),
            setFold:()=>{
                let isCollapse = !this.isCollapse;
                this.setFold(isCollapse);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        width:100%;
        height:100%;
        @include flex-between;
        .foldIcon{
            font-size:30px;
            color:#606060;
        }
    }
</style>