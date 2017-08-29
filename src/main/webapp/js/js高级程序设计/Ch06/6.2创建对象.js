//从第六章开始学习,08-10
console.log("6.1 理解对象");
console.log("6.1.1 4个数据属性和4个访问器属性");
//4个数据属性
var book = {};
Object.defineProperty(book, "name", {
    writable: true,
    enumerable: true,
    configurable: true,
    value: "jerry"
});
console.log("", book.name)
book.name = "remix";
delete book.name
console.log("", book.name)

//4个访问器属性
var book2 = {
    _year:  2004
    ,edition:   1
}
Object.defineProperty(book2, "year",{
    // 单独设置get/set, 则set/get不能用
    get:    function () {
        return  this._year;
    },
    set: function (newValue) {
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
// book.__defineGetter__()
book2.year = 2005;
console.log("", book2.year);


console.log("6.1.2 定义多个属性");
var book3 = {};
Object.defineProperties(book3, {
   _year: { //数据属性
       configurable: true,
       enumerable: true,
       writable: true,
       value: 2004
   },
   year:{
       configurable: false,
       enumerable: false,
       get: function () {
           return this.year;
       },
       set: function (year) {
           this.year = year;
       }
   }
});


console.log("6.1.3 读取属性");
var descriptor = Object.getOwnPropertyDescriptor(book3, "_year");
console.log("", descriptor.configurable);       //true
console.log("", descriptor.value);       //2004


console.log("6.2 创建对象");
console.log("6.2.1 工厂模式");
function createPerson(name){
    var p = new Object();
    p.name = name;
    p.sayNmae = function(){
        console.log("", name);
    };
    return p;
}
var p_1 = new createPerson("jerry");
console.log("", p_1.constructor == createPerson);    //false


console.log("6.2.2 构造函数模式");
function Person(name){
    this.name = name;
    this.sayNmae = function(){
        console.log("", this.name);
    };
}
var p_2 = new Person("chen");
var p_3 = new Person("lin");
console.log("", p_2.constructor == Person);    //true
console.log("", p_2 instanceof Person);    //true

//将构造函数当做函数使用

//构造函数的问题
// ! ECMAScript 中的函数是对象
console.log(p_2.sayNmae == p_3.sayNmae);  //false
// 构造函数的弊端：会导致不用的作用域链和标识符解析
// 解决方法
function Person1(name,age) {
    this.name = name;
    this.age = age;
    this.sayNmae = sayName;
}
function sayName() {
    console.log(this.name);
}
var p1_1 = new Person1("zhang", 19);
console.log(p1_1.sayNmae);      //
var p1_2 = new Person1("he", 18);


console.log("6.2.3 原型模式");
function Person2() {
}
Person2.prototype.name = "remix";
Person2.prototype.age = 19;
Person2.prototype.sayNmae= function () {
    console.log("",this.name);
}
var p2_1 = new Person2();
p2_1.sayNmae();  //
var p2_2 = new Person2();
p2_2.sayNmae();  //

console.log(Person2.prototype.constructor)
console.log(p2_1.sayNmae == p2_2.sayNmae);    //
console.log(Person2.prototype.isPrototypeOf(p2_1));    //true
console.log(Object.getPrototypeOf(p2_1) == Person2.prototype);    //true
// 可以通过对象实例访问原型中的值，但却不能重写。
// 新建对象实例可以重新赋值来重写从原型继承的值，赋值时如果值和原型的值一样,不会重写。
// 使用delete后,值会设置回原型的值


console.log("6.2.4 结合使用构造函数模式和原型模式");
function Person624(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["sb", "胖虎"];
}
Person624.prototype = {
    constructor : Person624,
    no : 4396,
    sayName : function () {
        console.log(this.name);
    }
}
var p624_1 = new Person624("jerry", 18, "code");
var p624_2 = new Person624("tony", 17, "理发师");
p624_1.friends.push("tianci");
console.log(p624_1.friends + " | " + p624_1.no);
console.log(p624_2.friends + " | " + p624_2.no);
console.log(p624_1.friends === p624_2.friends);
console.log(p624_1.sayName === p624_2.sayName);


console.log("6.2.5 动态原型模式")
function Person625(name){
    this.name = name;
    if(typeof this.sayNmae != "function"){
        Person625.prototype.sayNmae = function () {
            console.log(this.name);
        }
    }
}
var p625_1 = new Person625("ci");
p625_1.sayNmae();


console.log("6.2.6 寄生构造函数模式");


