<template>
  <div>
    <ul class="nav">
      <li><router-link  to="/path">首页</router-link></li>
      <li><router-link  to="/es6">Es6</router-link></li>
      <li><router-link  to="/Test">Test</router-link></li>
    </ul>
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
        <div>
          {{innerText}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      learnList:[],
      firstTitles:[],
      tops:[],
      innerText:'Welcome to my ES6!',
      listExit:[],
      title:''
    }
  },
  mounted:function(){
    this.$http.get('../../static/learn.json').then((response) => {
        this.learnList=JSON.parse(response.bodyText)
        this.firstTitles=JSON.parse(this.learnList.titles.replace(/'/g,'"'))
        console.log(this.firstTitles)
        console.log(JSON.parse(this.learnList.top.replace(/'/g,'"')))
        this.tops=JSON.parse(this.learnList.top.replace(/'/g,'"'))
        for(let i=0;i<this.firstTitles.length;i++){
          this.listExit[i]=false;
        }
        console.log(this.tops)
        
    }, (response) => {
        // error callback
    });
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
<style lang='less'>
@import '../assets/css/Es6.less';
  .nav{
    display: block;
    width: 600px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    li{
      list-style: none;
      width: 200px;
      float: left;
      text-align: center
    }
  }
</style>
