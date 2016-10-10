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