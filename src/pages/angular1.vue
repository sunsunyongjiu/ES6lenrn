<template>
    <div>
        <h1>{{msg}}</h1>
        <my-nav></my-nav>
        <div class="fatherBox">
          <ul class="firstUl">
            <li v-for="(items,index) in firstTitles" @click="showList(index)">
              <span>{{index+1}}.</span>
              <span>{{items}}</span>
              <ul class="secondUl" v-if="listExit[index]">
                <li v-for='(item,index2) in tops[index]' @click="showText(index,index2)" :class="{changeWhite:item.display}">
                  {{item.name}}
                </li>
              </ul>
            </li>
          </ul>
          <div class="learnDiv">
            <h3>
              {{title}}
            </h3>
            <br>
            <div v-html="innerText">
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import myNav from '../components/nav'
import angularText from '../assets/text/angular'
    export default {
        data () {
            return {
                msg: "Angular!",
                angularText:[],
                firstTitles:[],
                tops:[],
                title:'',
                listExit:[],
                innerText:'Welcome to my Angular!',
            }
        },
        components:{
          myNav
        },
        methods:{

        },
        mounted:function(){
            console.log(angularText)
            this.firstTitles=angularText.titles;
            this.tops=angularText.top
            // this.$http.get('../../static/test.json').then((response) => {
            //     console.log(JSON.parse(response.bodyText))
            //     this.angularText=JSON.parse(response.bodyText).title
            //     console.log(this.angularText)
            // }, (response) => {
            //     // error callback
            // });
        },
        methods:{
            showText:function(x,y){
              for(let i=0;i<this.tops.length;i++){
                for(let l=0;l<this.tops[i].length;l++){
                  this.tops[i][l].display=false
                }
              }
              this.innerText=this.tops[x][y].text;
              this.title=this.tops[x][y].name
              this.tops[x][y].display=true
            },
            showList:function(n){
              this.listExit=Array(3)
              this.listExit.splice(n,1,!this.listExit[n])
              console.log(this.listExit)
            }
        }
    }
</script>
<style lang="less">
    @import '../assets/css/Es6.less';

</style>