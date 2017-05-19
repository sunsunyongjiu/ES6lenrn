<template>
    <div>
        <h1>{{msg}}</h1>
        <ul class="nav">
          <li><router-link  to="/path">首页</router-link></li>
          <li><router-link  to="/es6">Es6</router-link></li>
          <li><router-link  to="/Test">Test</router-link></li>
          <li><router-link  to="/angular">Angular.js</router-link></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "Angular!"
            }
        },
        methods:{

        },
        mouted:function(){
            console.log(11111111111)
        }
    }
</script>
<style lang="less">
    @import '../assets/css/Es6.less';

</style>