<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>