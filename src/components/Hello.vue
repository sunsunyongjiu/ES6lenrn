<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul class="nav">
      <li><router-link  to="/path">首页<span class="none"></span></router-link></li>
      <li><router-link  to="/es6">Es6 <span class="none"></span></router-link></li>
      <li><router-link  to="/test">Test <span class="none"></span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'ES6 学习笔记（ES6+Vue.js）'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
@import '../assets/css/hello.less';
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}
.none{
  height: 100%;
  width: 0;
  vertical-align: middle;
}
</style>
