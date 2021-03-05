<template>
    <div class="nav">
        <el-menu :collapse="isCollapse">
            <template v-for="(menu) in menus">
                <el-menu-item :index="menu.index" v-if="menu.subs.length == 0" :key="menu.index">
                    <i :class="[menu.icon,'icon']"></i>
                    <span slot="title">{{menu.name}}</span>
                </el-menu-item>
                <el-submenu :index="menu.index" v-else :key="menu.index">
                    <template slot="title">
                        <i :class="[menu.icon,'icon']"></i>
                        <span>{{menu.name}}</span>
                    </template>
                    <el-menu-item-group v-for="sub in menu.subs" :key="sub.index">
                        <el-menu-item :index="sub.index">{{sub.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
    export default {
        name: 'Nav',
        data() {
            return {
                menus: [{
                        index: '1',
                        name: '表格',
                        icon: 'el-icon-watermelon',
                        url: '',
                        subs: []
                    },
                    {
                        index: '2',
                        name: '表单',
                        icon: 'el-icon-cherry',
                        subs: [{
                            index: '1-1',
                            name: '通用表单',
                            url: '',
                        }, {
                            index: '1-2',
                            name: '进度表单',
                            url: '',

                        }]
                    },
                    {
                        index: '3',
                        name: '图形',
                        icon: 'el-icon-apple',
                        url: '',
                        subs: []
                    },

                ],
                isCollapse:false
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>