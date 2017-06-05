<template>
    <div>
        <my-nav></my-nav>
    </div>
</template>
<script>
import myNav from '../components/nav'
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        },
        components:{
            myNav
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