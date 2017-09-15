<template>
  <div>
    <my-nav></my-nav>
    <div v-show-me class="show">
    </div>
    <group title="chained columns">
      <popup-picker :data="list3" :columns="4" v-model="value4" show-name :column-width="width"></popup-picker>
    </group>
  </div>
</template>
<script>
import myNav from '../components/nav'
import { PopupPicker, Group } from 'vux'
export default {
  data() {
    return {
      msg: "我是home 组件",
      value4: [],
      width:[1/4,1/4,1/4],
      list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        },{
          name: '中国1',
          value: 'china1',
          parent: 'china'
        },
        {
          name: '中国2',
          value: 'china2',
          parent: 'china1'
        },
        {
          name: '中国3',
          value: 'china3',
          parent: 'china2'
        }


      ],
    }
  },
  components: {
    myNav,
    PopupPicker,
    Group
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
.show {
  width: 20vw;
  height: 20vw;
  background: yellow;
  position: absolute;
}

</style>
