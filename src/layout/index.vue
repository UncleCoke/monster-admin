<template>
    <div class="layout">
        <el-container>
            <el-aside width="200px">
                <Aside />
            </el-aside>
            <el-container>
                <el-header height="50px">
                    <Header />
                </el-header>
                <el-main>
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import Header from './Header'
    import Aside from './Aside'
    import Main from './Main'
    export default {
        name: 'Layout',
        components: {
            Header,
            Aside,
            Main
        },
        data() {
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        width: 100%;
        height: 100%;

        .el-container {
            width: 100%;
            height: 100%;

            .el-container {
                padding-left: 200px;

                .el-header {
                    background: #fff;
                    -webkit-box-shadow: 0 10px 10px -10px #ccc;
                    box-shadow: 0 10px 10px -10px #ccc;
                }
            }

            .el-aside {
                position: fixed;
                height: 100%;
                background-color: #fafafa;
                -webkit-box-shadow: 10px 0 10px -10px #c7c7c7;
                box-shadow: 10px 0 10px -10px #c7c7c7;
            }
        }
    }
</style>