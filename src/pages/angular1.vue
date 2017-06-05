<template>
    <div>
        <h1>{{msg}}</h1>
        <my-nav></my-nav>
        <div class="fatherBox">
          <ul class="firstUl">
            <li v-for="(items,index) in angularText">
              <span>{{index}}.</span>
              <span>{{items}}</span>
              <!-- <ul class="secondUl" v-if="listExit[index]">
                <li v-for='(item,index2) in tops[index]' @click="showText(index,index2)" :class="{changeWhite:item.display}">
                  {{item.name}}
                </li>
              </ul> -->
            </li>
          </ul>
          <!-- <div class="learnDiv">
            <h3>
              {{title}}
            </h3>
            <br>
            <div v-html="innerText">
            </div>
          </div> -->
        </div>
    </div>
</template>
<script>
import myNav from '../components/nav'
    export default {
        data () {
            return {
                msg: "Angular!",
                angularText:[]
            }
        },
        components:{
          myNav
        },
        methods:{

        },
        mounted:function(){
            this.$http.get('../../static/test.json').then((response) => {
                console.log(JSON.parse(response.bodyText))
                this.angularText=JSON.parse(response.bodyText).title
                console.log(this.angularText)
            }, (response) => {
                // error callback
            });
        },
    }
</script>
<style lang="less">
    @import '../assets/css/Es6.less';

</style>