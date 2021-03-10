<template>
  <div class="nav">
    <el-menu :collapse="isCollapse" :collapse-transition="false" :router="true" :default-active="activeMenu">
      <template v-for="menu in menus">
        <el-menu-item :index="menu.meta.activeMenu" v-if="!menu.children || !menu.showChildren"
          :key="menu.meta.activeMenu">
          <i :class="[menu.meta.icon, 'icon']"></i>
          <span slot="title">{{ menu.meta.title }}</span>
        </el-menu-item>
        <el-submenu :index="menu.meta.activeMenu" v-else :key="menu.meta.activeMenu">
          <template slot="title">
            <i :class="[menu.meta.icon, 'icon']"></i>
            <span>{{ menu.meta.title }}</span>
          </template>
          <template v-for="sub in menu.children">
            <el-menu-item-group :key="sub.meta.activeMenu" v-if="!sub.meta.roles || sub.meta.roles.indexOf(role) > -1">
              <el-menu-item :index="sub.meta.activeMenu">{{ sub.meta.title }}</el-menu-item>
            </el-menu-item-group>
          </template>
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
    computed: {
      ...mapGetters('user',["role"]),
      ...mapGetters("setting", ["isCollapse"]),
      activeMenu() {
        const route = this.$route
        const {
          path
        } = route
        return path
      },
      menus() {
        return this.$router.options.routes.filter(router => !router.hidden && (!router.meta.roles || router.meta.roles
          .indexOf(this.role) > -1))
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>