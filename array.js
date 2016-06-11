/*
 * 1 将一个二维数组扁平化为一个一维数组
 */
 var arr = [];
 arr[0] = ['a', 'b'];
 arr[1] = ['c', 'd', 'e'];
 arr[2] = ['f', 'g', 'h'];
 var newArr = arr.concat.apply([], arr);
 console.log(newArr);

 // 原始方法
 var newArr = arr[0].concat(arr[1], arr[2]);

/*
 * 2 删除和替换数组元素
 */
// 初级
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.splice(arr.indexOf('c'), 1);  //删除
arr.splice(arr.indexOf('d'), 1, "hah");   //替换

// 中级
var arr = ['ab', 'bb', 'cd', 'ab', 'cc', 'dd', 'ab'];
var index = arr.indexOf('ab');
// 替换元素
while(arr.indexOf('ab') != -1) {
	arr.splice(arr.indexOf('ab'), 1, '**');
}
console.log(arr);	// ["**", "bb", "cd", "**", "cc", "dd", "**"]
// 删除元素
while(arr.indexOf('**') != -1) {
	arr.splice(arr.indexOf('**'), 1);
}
console.log(arr);	// ["bb", "cd", "cc", "dd"]

/*
 * 3 对每个数组元素应用一个函数
 */
var arr = ['ab', 'bb', 'cd', 'ab', 'cc', 'dd', 'ab'];
arr.forEach(function(item, index, array) {
	if (item === 'ab') {
		array[index] = '**';
	}
})
console.log(arr);	// ["**", "bb", "cd", "**", "cc", "dd", "**"]

/*
 * 4 对数组中的每一个元素执行一个函数并返回一个新数组
 */
var arr = [1, 4, 7, 11, 32];
var newArr = arr.map(function(element) {
	return element > 10;
});
console.log(newArr);	// [10, 40, 70, 110, 320]

/*
 * 5 在类数组上模拟数组
 * querySelectorAll()返回的nodeList不是数组，是类数组
 * forEach()是一个数组方法
 */
var cells = document.querySelectorAll('td + td');
[].forEach.call(cells, function(cell) {
	sum += parseInt(cell.firstChild.data);
});

/*
 * 6 使用关联数组存储表单元素名和值
 */
 <form id="form">
 	<label>value 1:</label><input type="text" id="first" /><br/ >
 	<label>value 2:</label><input type="text" id="second" /><br/ >
 	<label>value 3:</label><input type="text" id="third" /><br/ >
 	<label>value 4:</label><input type="text" id="fourth" /><br/ >
 	<button id="button">validate</button>
 </form>
 <div id="result"></div>
 <script>
 	var form = document.getElementById('form');
 	var btn = document.getElementById('button');
 	btn.onclick = function(e) {
 		e.preventDefault();
 		var elems = form.elements;
 		var elemArray = {};
 		for (var i = 0; i < elems.length; i++) {
 			if (elems[i].type === 'text') {
 				elemArray[elems[i].id] = elems[i].value;
 			}
 		}

 		var str = '';
 		Object.keys(elemArray).forEach(function(key) {
 			var value = elemArray[key];
 			str += key + '->' + value + '<br />';
 		});

 		document.getElementById('result').innerHTML = str;
 	}
 </script>