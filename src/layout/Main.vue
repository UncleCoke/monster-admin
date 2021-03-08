<template>
    <div class="main">
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'Main',
        data() {
            return {

            }
        }
    }
</script>
<style lang="scss" scoped>
    .main{
        width:100%;
        height:100%;
    }
</style>