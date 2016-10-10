/***** chapter 3 *****/

/*
 * 1、break和continue与label语句联合使用
 */

// break label
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i === 5 && j === 5) {
			break outermost;
		}
		num++;
	}
}
alert(num);	// 55

// normal break
ar num = 0;
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i === 5 && j === 5) {
			break;
		}
		num++;
	}
}
alert(num);	// 95

// continue label
var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i === 5 && j === 5) {
			continue outermost;
		}
		num++;
	}
}
alert(num);	// 95

// normal continue
ar num = 0;
for (var i = 0; i < 10; i++) {
	for (var j = 0; j < 10; j++) {
		if (i === 5 && j === 5) {
			continue;
		}
		num++;
	}
}
alert(num);	// 99

/*
 * 2、switch进行数值比较（switch使用全等操作符进行比较） 
 */

var num = 25;
switch(true) {
	case num < 0:
		// dosomething()
		break;
	case num >=0 && num <=10:
		// dosomething()
		break;
	case num > 10 && num <= 20:
		// dosomething()
		break;
	default:
		// dosomething
}

/*
 * 3、sort排序
 */
function compare(value1, value2) {
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;	// 正数才交换两个值的顺序
	} else {
		return 0;
	}
}
var values = [0, 1, 5, 10, 15];
values.sort();			// [0, 1, 10, 15, 5]
values.sort(compare);	// [0, 1, 5, 10, 15]

// 简写(当数组是数值时)
function simpleCompare(value1, value2) {
	return value1 - value2;	// 从小到大
	// return value2 - value2; // 从大到小
}

// 根据对象属性对数组进行排序
function compare(prop) {
	return function(obj1, obj2) {
		var value1 = obj1[prop];
		var value2 = obj2[prop];
		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;	// 正数才交换两个值的顺序
		} else {
			return 0;
		}
	}
}

var data = [
	{ name: 'b', age: 20 },
	{ name: 'a', age: 21 }
]
data.sort(compare('name'));
/*
[
	{ name: 'a', age: 21 },
	{ name: 'b', age: 20 }
]
*/
data.sort(compare('age'));
/*
[
	{ name: 'b', age: 20 },
	{ name: 'a', age: 21 }
]
*/

/*
 * 4、通过循环调用indexof()来找到所有匹配的子字符串
 */

var stringValue = "jions ronwfownk fwiuh rwjfohfo rwjohjvo"
var position = new Array();
var pos = stringValue.indexOf("o");
while (pos > -1) {
    position.push(pos);
    pos = stringValue.indexOf("o", pos + 1);
}
console.log(position);          // [2, 7, 11, 26, 29, 34, 38]

/*
 * 5、Math.random()生成随机数
 */
// 生成介于min和max之间的随机数（只包括min）
function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}
// 生成介于min和max之间的随机整数（包括min和max）
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
// 从某个整数范围内随机选择一个值
Math.floor(Math.random() * 可能值的总数 + 第一个可能值)