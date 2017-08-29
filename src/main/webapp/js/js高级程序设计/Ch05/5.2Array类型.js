console.log("5.2 array");
// array数组可以保存任意类型的数据
// array.length属性是可读可写的
var a1 = new Array();
var a2 = Array(3);
var a3 = Array("chen","tianci");
var a4 = Array();
a4.push("remix");
a4.push("chen");
console.log(a4[2]);
console.log(a4.length);
a4[a4.length] = "a";
console.log(a4[2]);

var a5 = new Array();
a5[9] = "skip";
console.log(a5[3]);
console.log(a5[9]);

var a6 = ["haha","hehe","sb"];
console.log(a6[1]);
a6.push(6);
console.log(a6[a6.length-1]);



console.log("5.2.1 检测数组");
// var value = ["ni"];
var value2 = new Array();
if(value2 instanceof Array){
    console.log(value2+"is a array");
}
if(Array.isArray(value2)){
    console.log(value2+"is a array");
    //ie9+
}

console.log("5.2.2 转换方法");
var colors = ["red","black","white"];
console.log(colors);
console.log(colors.toString());
console.log(colors.toLocaleString());
console.log(colors.join(","));
console.log(colors.join("|"));


console.log("5.2.3 栈方法");
//push()和pop()方法。
var colors2 = ["red","black","white"];
colors2.push("blue");
console.log(colors2[0]);
console.log(colors2[colors2.length-1]);
colors2.pop();
console.log(colors2[0]);
console.log(colors2[colors2.length-1]);


console.log("5.2.4 队列方法");
//push()和shift()
//反向队列:pop()和unshift();


console.log("5.2.5 重排序方法");
//反转：reverse();
//按字符串排序：sort() (升序);
//按大小排序：compare
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
//仅用于数值类型
function compare2(value1, value2) {
    return value1 - value2;
}

var values = [0, 1, 5, 10, 15];
var valuesString = ["t","a", "c", "b", "m"];
values.sort(compare);
valuesString.sort(compare);
console.log(values);
console.log(valuesString);


console.log("5.2.6 操作方法");
var colors3 = ["red", "green", "blue"];
var colors4 = colors3.concat("yellow", ["black", "brown"]);
console.log(colors3);     //red,green,blue
console.log(colors4);    //red,green,blue,yellow,black,brown

console.log("slice");
var colors5 = ["red", "green", "blue", "yellow", "purple"];
var colors6 = colors5.slice(3);
var colors7 = colors5.slice(3,4);
var colors8 = colors5.slice(-4,-3);
var colors9 = colors5.slice(-15,-14);

console.log(colors6);
console.log(colors7);
console.log(colors8);
console.log(colors9);

console.log("splice");  //会改变原数组，返回的是被删除的数组。
console.log("splice(删除的位置，删除的数量（往后删除），插入的数组元素（可以是多个，在”删除的位置“的前面插入）)");
console.log("删除，往后删除");
var colors5_1 = ["red", "green", "blue", "yellow", "purple"];
console.log(colors5_1);
var colors7_1 = colors5_1.splice(4,4);
console.log(colors7_1);
console.log(colors5_1);

console.log("插入/替换");
var colors5_2 = ["red", "green", "blue", "yellow", "purple"];
var colors7_2 = colors5_2.splice(3,1,"remix","chen");
console.log(colors7_2);
console.log(colors5_2);


console.log("5.2.7 位置方法");
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4));        //3
console.log(numbers.lastIndexOf(4));    //5

console.log(numbers.indexOf(4, 4));     //5
console.log(numbers.lastIndexOf(4, 4)); //3

var person = { age: "11",name2: "Nicholas" };
var people = [{ name: "Nicholas" }];
var morePeople = [person];

console.log(people.indexOf(person));     //-1
console.log(morePeople.indexOf(person)); //0


console.log("5.2.8 迭代方法");
//ervery, filter, forEach, map, some
console.log("every()");
var numbers2 = [1,2,3,4,5,4,3,2,1];
console.log(numbers2);
var erveryResult = numbers2.every(function (item, index, items) {
    return item > 2;
});
console.log(erveryResult);
var erveryResult2 = numbers2.every(function (item, index, items) {
    return item * 2;
});
console.log(erveryResult2);


console.log("some()");
var someResult = numbers2.some(function (item, index, items) {
    return item > 2;
});
console.log(someResult);


console.log("filter()");
var filterResult = numbers2.filter(function (item, index, items) {
    return item > 2;
});
console.log(filterResult);


console.log("map()");
var mapResult = numbers2.map(function (item, index, items) {
    return item > 2;
});
console.log(mapResult);
var mapResult2 = numbers2.map(function (item, index, items) {
    return item * 2;
});
console.log(mapResult2);


console.log("forEach()");   //不返回值
var forEachResult = numbers2.forEach(function (item, index, items) {
    item = item + 2;
});
console.log(forEachResult);
console.log(numbers2);      //[ 1, 2, 3, 4, 5, 4, 3, 2, 1 ]


console.log("5.2.9 缩小方法");
var numbers3 = [1,2,3,4,5,4,3,2,1];
var forEachResult = numbers3.reduce(function (pre, current, index, array) {
    return pre+current;
});
console.log(forEachResult);
//reduceRight()：从→向左操作


//array 9个方面共22个方法。
//2个检测数组方法：instanceof    Array.isArray();
//3个转换方法：toString()    toLocaleString();   .valueOf();
//1个栈：push();   pop();(从尾部开始删除元素)
//2个队列：push();   shift();(从头部开始删除元素)   反队列：unshift();  pop();
//3个排序方法：sort();   sort(compare());    reverse();
//3操作方法：concat();    slice();    splice();
//2位置方法：indexOf();   lastIndexOf();
//5个迭代方法：ervery(); some(); map();   filter();   forEach();
//2个缩小方法：reduce();     reduceRight();

