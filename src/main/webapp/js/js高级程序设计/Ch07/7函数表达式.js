/**
 * Created by astaJerry on 2017/8/14.
 */
//function.name.
//函数声明
function functionName() {
    //函数体
}
console.log(functionName.name);
//2 函数声明提升：执行代码可以放在函数声明之前
//函数表达式
var f1 = function () {
    //函数体
}
//3 匿名函数(没有函数名的函数声明)执行代码必须放在函数声明之后; 匿名函数的name属性是空字符串
//4 if 语句中不要写函数声明

console.log("7.1 递归");
function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * factorial(num-1);
    }
}
var anotherFactorial = factorial;
factorial = null;
// console.log(anotherFactorial(4));  //error!


function factorial2(num){
    if (num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}
var anotherFactorial = factorial2;
factorial = null;
console.log(anotherFactorial(4));  //24

// 一个名为f()的命名函数表达式
var factorial3 = (function f(num) {
    if(num <= 1){
        return 1;
    }else{
        return num * f(num - 1);
    }
});
// console.log(f.name);  // f is not defined.
console.log(factorial3(4));  //24

console.log("7.2 闭包");
console.log("闭包：指有权访问另一个函数作用域中的变量的函数");

function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}

var c = createComparisonFunction("name");
var result = c({name: "Nicholas"}, {name: "Greg"});
console.log(result);
// c = null;


console.log("7.2.1 闭包和变量");
function createFunction() {
    var result = new Array();
    for (var i = 0; i < 4; i++) {
        result[i] = function () {
            return i;
        }
    }
    return result;
}
var c2 = createFunction();
for(i in c2){
   var result2 = c2[i];
    console.log(result2(5))
}


