<template>
  <div class="hello">
    <h1 class="header">{{ msg }}</h1>
    <my-nav uuu="我来了" :yes='yes'></my-nav>
  </div>
</template>

<script>
import myNav from '../components/nav'
import {state} from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'ES6 学习笔记（ES6+Vue.js）',
      yes:false
    }
  },
  components:{
    myNav
  },
  mounted:function(){
    console.log(this.$store)
  }
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
