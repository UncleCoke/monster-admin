<template>
    <div class="login">
        <el-image class="loginImage" :src="logoUrl"></el-image>
        <div class="productName">怪兽管理有限公司</div>
        <div class="loginForm">
            <el-form label-position="left" :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="loginForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="round" style="width:100%;" @click="submitForm('loginForm')">登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {
        login
    } from '@/api/api.js';
    import {
        mapActions
    } from 'vuex';
    export default {
        name: 'Login',
        data() {
            return {
                logoUrl: require("@/assets/logo.png"),
                loginForm: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [{
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            max: 5,
                            message: '长度不能大于5个字符',
                            trigger: 'blur'
                        }
                    ],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                }

            };
        },
        methods: {
            ...mapActions('user', ['setToken', 'setUser','setRole']),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        login(this.loginForm).then(res => {
                            let token = res.data.token;
                            let user = res.data.user;
                            let role = res.data.role;
                            this.setToken(token);
                            this.setUser(user);
                            this.setRole(role);
                            window.sessionStorage.setItem('token', token);
                            this.$success('登录成功');
                            this.$router.replace('/');
                        })
                    }
                });
            }
        }
    }
</script>
<style lang='scss' scoped>
    .login {
        width: 100%;
        height: 100%;
        @include flex-center($direction: column);

        .loginImage {
            width: 48px;
            height: 48px;
        }

        .productName {
            font-size: 14px;
            color: #303030;
            margin: 24px auto 32px;
        }

        .loginForm {
            width: 300px;
            padding: 20px;
            font-size: 14px;
            background: #f6f8fa;
            border: 1px solid #eaecef;
            border-radius: 6px;
        }
    }
</style>