<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  ul{
    margin: 0;
    padding: 0
  }
}


</style>
