const es6Text = {
	titles:[
		'let and const','变量的解构赋值','字符串的扩展','数组的扩展'
	],
	top:[
	// let and const
		[
			{'name':'1.1 let','text':'let声明的变量只在它所在代码块有效 例:for(let i=0;i<10;i++){console.log(i)}'},
			{'name':'1.2不存在变量提升','text':'必须先声明在使用'},
			{'name':'1.3暂时性死区','text':'只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响'},
			{'name':'1.4','text':'do表达式'},
			{'name':'1.5const','text':'const指向的内存地址不变（obj可以改变内容）'}
		],
		// 变量的解构赋值
		[
			{'name':'2.1数组解构赋值','text':'以前只能分别赋值，现在可以这样：例 let[a,b,c]=[1,2,3];</br>允许指定默认值 例 let[a,b=2]=[3] a//3;</br>如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。例：function(){console.log(a)} let[n=f()]=[1] f()不会运行'},
			{'name':'2.2对象的解构赋值','text':'前后key值对应'},
			{'name':'2.3字符串的','text':'字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。'},
			{'name':'2.4圆括号问题','text':'建议只要有可能，就不要在模式中放置圆括号。'},
			{'name':'2.5用途','text':'1：交换值 例：x=1 y=2 &nbsp;[x,y]=[y,x]</br>2:从函数返回多个值 例：function f(){return [1,2,3]} let [a,b,c]=f()</br>3:函数参数的定义 方便函数参数名与值一一对应 例：function f([x,y,z]){...} f([z:4,x:1,y:2])</br>4:提取JSON数据<br>5 遍历map结构 例：var map=new Map() map.set(first,hello) for(let[key,value] of map){console.log(key value)}'}
		],
		// 字符串的扩展
		[
			{'name':'3.1 字符的unicode','text':'允许使用/(反向)xxxx表示有个字符 例 /u674e/u9633 //李阳 '},
			{'name':'3.2codePointAt()','text':'ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。参数是序号'},
			{'name':'3.3 String.fromCodePoint()','text':'ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符'},
			{'name':'3.4 at()','text':'at()可以识别Unicode编号大于0xFFFF的字符，返回正确的字符。'},
			{'name':'3.5 includes(), startsWith(), endsWith()','text':'字符串检查的3种新发放 以。。开头 以。。结尾 是否包含'},
			{'name':'3.6 repeat()','text':'重复字符串，参数是遍数'},
			{'name':'3.7 padStart(),padEnd()','text':'用于字符串长度不够时补全，两个参数，1长度，2用以填充的字符串'},
			{'name':'3.8 模板字符串','text':'反向单引号包裹需要编写的字符串，可以${}加入变量，使用<%...%>放置JavaScript代码，使用<%= ... %>输出JavaScript表达式。'},
			{'name':'3.9 string.raw','text':'用于返回转移/ 如果字符串例有/会再加一个/，有//的话不做处理'}
		],
		// 数组的扩展
		[
			{name:'4.1 Array.from()',text:'1.用于将两类对象转为真正的数组：类似数组的对象和可遍历的对象。例：<br> let arrayLike={"0":"a","1":"b",length:2}</br>let arr2 = Array.from(arrayLike) //["a","b"]</br>2.第二个参数,可以接受第二个参数用来对每个元素进行处理，处理后放入返回的数组。例：</br>Array.from(arrayLike,x=>x*x)  Array.from([1,2,3],(x)=>x*x)//[1,4,9]'},
			{name:'4.2 Array.of()',text:'1.用于将一组值，转化为数组。例：</br>Array(3,11,8)//[3,11,8];Aray.of(3).length//1</br>2.弥补Array()的不足。参数不同导致Array()的行为有差异。如Array()//[],Array(3)//[ , , ],Array(3,11,9)//[3,11,9]</br>Array.of总是返回数值组成的数组，如果没有参数就返回一个空数组。'},
			{name:'4.3 数组实例的copyWithin()',text:'在当前数组内部，将指定位置的成员复制到其他位置，然后返回当前数组（会修改当前数组。）例：<br>Array.prototype.copyWithin(target,start=0,end=this.length)</br>三个参数：<br>-target(必需)：从该位置开始替换数据；</br>-start(可选)：从该位置开始读取数据，默认为0.如果为负值表示倒数。</br>-end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负值表示倒数。<br>[1,2,3,4,5].copyWithin(0,3)//[4,5,1,2,3]<br>表示从3号位直到数组结束的成员（4,5），复制从0号位开始的位置结果覆盖了原来的1,2'},
			{name:'4.4 数组实例的find()和findIndex()',text:'用于找出第一个符合条件的数组成员。他的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员，如果没有返回undefined.例：[1,4,-5,10].find((n)=>n<0)//-5 <br>[1,5,10,15].find(function(value,index,arr){return value>9})可以接受三个参数，依次为当前的值，当前的位置。和原数组。'},
			{name:'4.5 fill()',text:'使用给定值，填充一个数组。["a","b","c"].fill(7)//[7,7,7] new Array(3).fill(7)//[7,7,7]<br>可以接受第二个和第三个参数用于制定填充的起始位置和结束位置。例：<br>["a"."b","v"].fill(7,1,2)//["a",7,"c"]'}
		]
	]
}

export default es6Text