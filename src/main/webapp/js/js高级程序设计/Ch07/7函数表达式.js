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

