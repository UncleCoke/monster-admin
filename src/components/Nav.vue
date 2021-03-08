<template>
  <div class="nav">
    <el-menu :collapse="isCollapse" :collapse-transition="false" :router="true">
      <template v-for="menu in menus">
        <el-menu-item :index="menu.index" v-if="!menu.subs" :key="menu.index">
          <i :class="[menu.icon, 'icon']"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
        <el-submenu :index="menu.index" v-else :key="menu.index">
          <template slot="title">
            <i :class="[menu.icon, 'icon']"></i>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item-group v-for="sub in menu.subs" :key="sub.index">
            <el-menu-item :index="sub.index">{{ sub.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    name: "Nav",
    data() {
      return {
        menus: [{
            index: "/table",
            name: "表格",
            icon: "el-icon-watermelon"
          },
          {
            index: "/form",
            name: "表单",
            icon: "el-icon-cherry",
            subs: [{
                index: "/form/default",
                name: "基础表单",
              },
              {
                index: "/form/step",
                name: "分步表单",
              },
            ],
          },
          {
            index: "/card",
            name: "卡片",
            icon: "el-icon-apple"
          },
        ]
      };
    },
    computed: {
      ...mapGetters("setting", ["isCollapse"]),
    },
  };
</script>
<style lang="scss" scoped>
</style>