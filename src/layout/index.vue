<template>
  <div class="layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <Aside />
      </el-aside>
      <el-container :style="{ 'padding-left': isCollapse ? '64px' : '200px' }">
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
import { mapGetters } from "vuex";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
export default {
  name: "Layout",
  components: {
    Header,
    Aside,
    Main,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("setting", ["isCollapse"]),
  },
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;

  .el-container {
    width: 100%;
    height: 100%;

    .el-container {
      transition: all 0.3s ease 0s;

      .el-header {
        background: #fff;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
      }
    }

    .el-aside {
      position: fixed;
      height: 100%;
      background-color: #fafafa;
      box-shadow: 10px 0 10px -10px #c7c7c7;
      transition: all 0.3s ease-in-out 0s;
    }
  }
}
</style>