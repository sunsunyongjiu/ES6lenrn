<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
        <ul class="nav">
          <li><router-link  to="/path">首页</router-link></li>
          <li><router-link  to="/es6">Es6</router-link></li>
          <li><router-link  to="/Test">Test</router-link></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>
<style lang="less">
    @import '../assets/css/Es6.less';

</style>