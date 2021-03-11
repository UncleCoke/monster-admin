<template>
    <div class="table">
        <div class="panel">
            <el-form :inline="true" :model="filterData">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="filterData.name" placeholder="姓名" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age" :rules="{ type: 'number', message: '年龄必须为数字值'}">
                    <el-input v-model.number="filterData.age" placeholder="年龄" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="panel">
            <el-table v-loading="loading" :data="list" border fit highlight-current-row style="width: 100%;">
                <el-table-column prop="name" label="姓名" width="200">
                </el-table-column>
                <el-table-column prop="age" label="年龄" width="200">
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                    <template slot-scope="{row}">
                        <template v-if="row.edit">
                            <el-input v-model="row.email" size="small" />
                        </template>
                        <span v-else>{{ row.email }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200" align="center">
                    <template slot-scope="{row,$index}">
                        <div v-if="!row.edit">
                            <el-button size="mini" @click="handleEdit($index)" type="success"
                                style="margin-right:10px;">编辑</el-button>
                            <el-popover placement="top" width="200" :ref="`popover-${$index}`">
                                <p style="margin:5px 0 15px;">确定删除这条记录吗？</p>
                                <div style="text-align: right; margin:0">
                                    <el-button size="mini" type="info" plain @click="handleClose($index)">取消</el-button>
                                    <el-button type="primary" size="mini" @click="handleDelete($index)">确定</el-button>
                                </div>
                                <el-button size="mini" type="danger" slot="reference">删除
                                </el-button>
                            </el-popover>
                        </div>
                        <div v-else>
                            <el-button size="mini" @click="handleSave(row)" type="success">保存</el-button>
                            <el-button size="mini" type="info" @click="handleCancel(row)">取消
                            </el-button>
                        </div>
                    </template>
                </el-table-column>

            </el-table>
        </div>
    </div>
</template>

<script>
    import {
        tables
    } from '@/api/api.js'
    export default {
        name: 'Table',
        data() {
            return {
                filterData: {
                    name: '',
                    age: '',
                    county: '',
                    email: ''
                },
                list: [],
                loading: false
            };
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                this.loading = true;
                tables(this.filterData).then(res => {
                    let list = res.list;
                    this.list = list.map(v => {
                        this.$set(v,'edit',false);
                        v.oEmail = v.email;
                        return v;
                    })
                    this.loading = false;
                })
            },
            search() {
                this.getList();
            },
            handleEdit(index) {
                this.list[index]['edit'] = true;
            },
            handleDelete(index) {
                this.list.splice(index, 1);
                this.handleClose(index);
            },
            handleClose(index) {
                this.$refs[`popover-${index}`].doClose()
            },
            handleSave(row){
                row.edit = false;
                row.oEmail = row.email; 
            },
            handleCancel(row){
                row.edit = false;
                row.email = row.oEmail;
            }
        }
    }
</script>
<style lang='scss' scoped>
    .table {
        .panel:first-of-type {
            padding: 22px 30px 0 30px;
            margin-bottom: 12px;
        }
    }
</style>