console.log();
console.log("Function类型");
console.log("函数实际上是对象，每个函数都是Function类型的实例。函数是对象，函数名是指针。");
function sum(num1, num2){
    return num1 + num2;
}

var sum1 = function(num1, num2){
    return num1 + num2 + 1;
};
console.log(sum(1, 2));
console.log(sum1(1, 2));


console.log("5.5.1 函数没有重载");


console.log("5.5.2 函数声明与函数表达式");
console.log(sum2(1, 2));    //不会报错,因为函数声明会被率先读取。
function sum2(num1, num2){
    return num1 + num2;
}

// console.log(sum2_1(1, 2));    //会报错.
var sum2_1 = function(num1, num2){
    return num1 + num2;
};


console.log("5.5.3 函数做函数的参数");
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}
function add10(num){
    return num + 10;
}
var result1 = callSomeFunction(add10, 10);
console.log(result1);   //20

function getGreeting(name){
    return "Hello, " + name;
}
var result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2);   //Hello, Nicholas


console.log("从一个函数中返回另一个函数");
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
var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];

data.sort(createComparisonFunction("name"));
console.log(data[0].name);  //Nicholas

data.sort(createComparisonFunction("age"));
console.log(data[0].name);  //Zachary


console.log("5.5.4函数内部属性arguments 和this");
//阶乘问题
function factorial(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1)
    }
}
console.log(factorial(3));
//refactor
var factorial_1 = factorial;
factorial = null;
// console.log(factorial_1(3));     //会报错。和自己耦合在一起了。

//使用arguments.callee调用自身不会耦合。
function factorial2(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1)
    }
}
console.log(factorial2(3));
//refactor
var factorial2_1 = factorial2;
factorial2 = null;
console.log(factorial2_1(3));


console.log("this：引用的是函数据以执行的环境对象，在网页全局作用域中调用函数，this对象引用的就是windows对象");
function this1(){
    console.log(this);
}


console.log("caller: 调用方");
function outer(){
    inner();
}
function inner(){
    console.log(arguments.callee.caller.toString());
}
outer();


console.log("5.5.5 函数属性和方法。属性：length和prototype。方法：call()和apply（）");
function sayName(name){
    console.log(name);
}
function sum(num1, num2){
    return num1 + num2;
}
function sayHi(){
    console.log("hi");
}

console.log(sayName.length);  //1
console.log(sum.length);      //2
console.log(sayHi.length);    //0


console.log("方法：call()和apply（）");
// window.color = "red";
var o = { color: "blue" };
function sayColor(){
    console.log(this.color);
}

sayColor();            //red
sayColor.call(this);   //red
// sayColor.call(window); //red
sayColor.call(o);      //blue



