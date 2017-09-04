console.log("BOM");
console.log("8.1window对象");
// 可以delete window.变量。但是不能delete  在全局作用域下定义的变量
// 通过window对象查询变量不会报错。

console.log("8.1.2 窗口的关系及框架");
// 每个框架都有自己的window对象。
// top
// parent
// self

console.log("8.1.5 导航和打开窗口");
window.open("http://www.baidu.com", "topFrame/_self/_parent/_blank/_top")

console.log("8.1.6 settimeout(), setInterval()");

var timeoutID = setTimeout(function () {
    console.log("hello world");
}, 2000);
//取消超时调用
clearTimeout(timeoutID);

//间歇调用
var intervalTimeId = setInterval(function () {
    console.log("hello world");
}, 2000);

clearInterval(intervalTimeId);

// 实际开发很少使用间歇调用，通常使用超时调用来模拟间歇调用。
// 因为用间歇调用的话，有时候上一次函数调用还没有执行完，又开始执行下一次函数调用
var executeNum = 0;
var NumMax = 10;
function incrementNumber() {
    executeNum ++ ;
    if(executeNum < NumMax){
        incrementNumber();
    }else {
        console.log("excute finish");
    }
}

var timeoutID2 = setTimeout(incrementNumber, 2000);

console.log("8.1.7 系统对话框alert(),  confirm() prompt()");
if(confirm("Yes or No?")){
    console.log("yes");
}else{
    console.log("no");
}
// print()和 find（）的异步的，不会在运行期间暂停js的执行。 2 不会受到chrome对话框计数器的影响。
window.print();
window.find();


