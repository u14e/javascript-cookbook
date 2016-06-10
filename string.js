/*
 * 1 从字符串提取一个列表
 */
条件： This is one sentence.This is a sentence with a list of items: cherries, oranges, apples, bananas. That was the list of items.
结果： ["cherries", "oranges", "apples", "bananas"]

var sentence = "This is one sentence.This is a sentence with a list of items: cherries, oranges, apples, bananas. That was the list of items.";
var startIndex = sentence.indexOf(':');
var endIndex = sentence.indexOf('.', startIndex + 1);
var listStr = sentence.slice(startIndex + 1, endIndex);
var listArray = listStr.split(',');
console.log(listArray);     //[" cherries", " oranges", " apples", " bananas"]

去掉空格

方法一：
listArray.forEach(function(list, index, array) {
	array[index] = list.trim();
});
console.log(listArray);     //["cherries", "oranges", "apples", "bananas"]
方法二：
var listArray1 = listStr.split(/\s*,\s*/);
console.log(listArray1); 	//[" cherries", "oranges", "apples", "bananas"]
// 第一个空格没去掉

/*
 * 2 检查一个存在的、非空的字符串
 */
if (typeof variable === 'string' && variable.length > 0) {
	//do something
}

/*
 * 3 在一个字符串中找到一个模式的所有实例
 */	
var searchString = "Now is the time and this is the time and that is the time";
var pattern = /t\w*e/g;
var matchArray;
var str = "";

while ((matchArray = pattern.exec(searchString)) != null) {
	console.log(matchArray);
	str = "at index " + matchArray.index + " we found " + matchArray[0];
	console.log(str);
}

//
["the", index: 7, input: "Now is the time and this is the time and that is the time"]
at index 7 we found the
["time", index: 11, input: "Now is the time and this is the time and that is the time"]
at index 11 we found time
["the", index: 28, input: "Now is the time and this is the time and that is the time"]
at index 28 we found the
["time", index: 32, input: "Now is the time and this is the time and that is the time"]
at index 32 we found time
["the", index: 49, input: "Now is the time and this is the time and that is the time"]
at index 49 we found the
["time", index: 53, input: "Now is the time and this is the time and that is the time"]
at index 53 we found time

/*
 * 4 带圆括号的子字符串匹配
 */
var re = /a(p+).*(pie)/ig;
var result = re.exec("The apples in the apple pie are tart");
console.log(result);
console.log(result.index);
console.log(result.input);

//
["apples in the apple pie", "pp", "pie", index: 4, input: "The apples in the apple pie are tart"]
4
The apples in the apple pie are tart

/*
 * 5 全局搜索构建
 */
描述： 
textarea获取字符串，文本输入框获取模式；
RegExp对象实例动态创建正则表达式；
结果字符串包含未匹配和匹配文本；
匹配文本用span包围，并添加class；

// css
.found {
	background-color: #ff0;
}
// html
<form id="textsearch">
	<textarea id="text" cols="150" rows="10"></textarea>
	<p>Search pattern: <input id="pattern" type="text" /></p>
</form>
<button id="searchSubmit">Search for pattern</button>
<div id="searchResult"></div>
// js
document.getElementById('searchSubmit').onclick = function() {
	var pattern = document.getElementById('pattern').value;
	var re = new RegExp(pattern, 'g');
	var text = document.getElementById('text').value;
	var result = "<pre>",
		first = 0,
		last = 0,
		matchArray;

	while ((matchArray = re.exec(text)) != null) {
		last = matchArray.index;
		result += text.slice(first, last);
		result += "<span class='found'>" + matchArray[0] + "</span>";
		first = re.lastIndex;
	}

	result += text.slice(first, text.length);

	document.getElementById('searchResult').innerHTML = result;
}

/*
 * 6 交换姓和名的位置
 */
var name = "Heng Wang";
var reg = /^(\w+)\s(\w+)$/;
var newName = name.replace(reg, "$2 $1");
console.log(newName);   //Wang Heng

var name = "Heng Wang";
var reg = /^(\w+)\s(\w+)$/;
var opout = reg.exec(name);
var newName = opout[2] + " " + opout[1];
console.log(newName); //Wang Heng

/*
 * 7 定时器（div单击移动和暂停）
 */
<div class="box" id="box"></div>
<script>
	var box = document.getElementById('box');
	var timer = null;

	box.onclick = function() {
		if (timer === null) {
			var x = box.offsetLeft;
			timer = setInterval(function() {
				x += 5;
				var left = x + 'px';
				box.style.left = left;
			}, 100);
		} else {
			clearInterval(timer);
			timer = null;
		}
	}
</script>