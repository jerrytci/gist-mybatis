console.log("5.7 单体内置对象");
console.log("5.7.1 Global对象");
console.log("1 URI编码对象");


console.log("2 eval()");


console.log("5.7.2 Math对象");

console.log("2 mini() max()");
var max = Math.max(3, 54, 32, 16);
console.log(max);    //54
var min = Math.min(3, 54, 32, 16);
console.log(min);    //3


console.log("3 ceil() floor() round()");
console.log(Math.ceil(25.9));     //26
console.log(Math.ceil(25.5));     //26
console.log(Math.ceil(25.1));     //26

console.log(Math.round(25.9));    //26
console.log(Math.round(25.5));    //26
console.log(Math.round(25.1));    //25

console.log(Math.floor(25.9));    //25
console.log(Math.floor(25.5));    //25
console.log(Math.floor(25.1));    //25


console.log("4 random()");
var rNum = Math.random();
var num = Math.floor(rNum *10 +1);
console.log(rNum);
console.log(num);
