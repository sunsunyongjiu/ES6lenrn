<template>
	<div>
		<my-nav></my-nav>
		<main>
			<dl v-for="item in texts" class="notes-dl">
				<dt >
					{{item.title}}
				</dt>
				<dd>
					{{item.text}}
					<a :href="item.link" target="_Blank">{{item.link}}</a>
				</dd>
			</dl>
		</main>
	</div>
</template>
<script type="text/javascript">
import myNav from '../components/nav'
import text from '../assets/text/text'
export default {
  data () {
    return {
      texts:text.notes
    }
  },
  components:{
    myNav
  },
  mounted:function(){
  	console.log(this.texts)
  }
}
</script>
<style lang='less' scoped>
	main{
		width: 1000px;
		margin: 0 auto;
	}
	.notes-dl{
		dt{
			text-align: left;
		}
		dd{
			text-align: left
		}
	}
</style>