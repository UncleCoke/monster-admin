<template>
    <div class="header">
        <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold','foldIcon']" @click="setFold"></i>
        <el-dropdown @command="handleCommand">
            <div class="user">
                <el-avatar :src="user.avatarUrl"></el-avatar>
                <div class="userName">{{user.userName}}</div>
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="signOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'Header',
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('setting', ['isCollapse']),
            ...mapGetters('user', ['user'])
        },
        methods: {
            ...mapActions('setting', ['setIsCollapse']),
            ...mapActions('user', ['setUser', 'setToken']),
            setFold() {
                let isCollapse = !this.isCollapse;
                this.setIsCollapse(isCollapse);
            },
            handleCommand(command) {
                if (command === 'signOut') {
                    window.sessionStorage.clear();
                    this.setUser({});
                    this.setToken('');
                    this.$router.replace('/login');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 100%;
        @include flex-between;

        .foldIcon {
            font-size: 30px;
            color: #808080;
        }

        .user {
            @include flex-center;

            .userName {
                font-weight: bold;
                margin: 0 8px 0 10px;
                color: #808080;
            }
        }
    }
</style>