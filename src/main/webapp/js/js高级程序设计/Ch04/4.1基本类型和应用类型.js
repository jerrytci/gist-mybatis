console.log("4.1.3传递参数")
// 所有函数的参数都是按值传递的
// 变量是按值和引用两种方式，而参数只能按值传递
/*function setName(obj) {
    obj.name = "Nicholas";
}

var person = new Object();
setName(person);
alert(person.name);    //"Nicholas"*/

function setName(obj) {
    obj.name = "tianci";
    obj = new Object();
    obj.name = "jerry";
}
var person = new Object();
setName(person);
console.log(person.name);    //"Nicholas"



console.log("4.1.4检测类型")
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();

alert(typeof s);   //string
alert(typeof i);   //number
alert(typeof b);   //Boolean
alert(typeof u);   //undefined
alert(typeof n);   //object
alert(typeof o);   //object
//ie, firefox： typeof instanceof -> object
//chrome, safari： typeof instanceof -> function

//instanceof: 用来检测是哪种引用类型; typeof: 用来检测是哪种基本类型。




