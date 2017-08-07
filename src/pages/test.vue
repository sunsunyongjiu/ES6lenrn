<template>
  <div>
    <my-nav></my-nav>
    <div v-show-me class="show">
    </div>
  </div>
</template>
<script>
import myNav from '../components/nav'
export default {
  data() {
    return {
      msg: "我是home 组件"
    }
  },
  components: {
    myNav
  },
  methods: {

  },
  directives: {
    showMe(el) {
      let oDiv = el; //el --> 触发的DOM元素
      oDiv.onmousedown = function(e) {
        console.log(e)
        let l = e.clientX - oDiv.offsetLeft;
        let t = e.clientY - oDiv.offsetTop;
        document.onmousemove = function(e) {
          oDiv.style.left = e.clientX - l + 'px';
          oDiv.style.top = e.clientY - t + 'px';
        };
        oDiv.onmouseup = function() {
          document.onmousemove = null;
          oDiv.onmouseup = null;
        }
      }
    }
  },
  mouted: function() {
    console.log(11111111111)
  }
}

</script>
<style lang="less">
@import '../assets/css/Es6.less';
.show{
    width: 20vw;
    height: 20vw;
    background: yellow;
    position: absolute;
}
</style>
