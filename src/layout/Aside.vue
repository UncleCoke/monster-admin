<template>
  <div class="aside">
    <el-image class="logoImage" :src="logoUrl" lazy>
      <div slot="error">
        <i class="el-icon-picture-outline icon-error"></i>
      </div>
    </el-image>
    <el-scrollbar class="scrollbar">
      <Nav />
    </el-scrollbar>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
export default {
  name: "Aside",
  components: {
    Nav,
  },
  data() {
    return {
      logoUrl: require("@/assets/logo.png"),
    };
  },
};
</script>
<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100%;
  @include flex-center(column);
  justify-content: flex-start;

  .logoImage {
    width:48px;
    height:48px;
    margin: 20px auto;
    .icon-error {
      font-size: 48px;
      color: #8a8a8a;
    }
  }

  .scrollbar {
    width: 100%;
    height: calc(100% - 100px);
  }
}
</style>