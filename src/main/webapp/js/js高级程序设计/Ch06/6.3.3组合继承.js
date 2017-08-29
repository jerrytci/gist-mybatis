/**
 * Created by astaJerry on 2017/8/14.
 */
// console.log("组合继承-最常用的继承模式");
// function SuperType(name) {
//     this.name = name;
//     this.colors = ["red","blue","green"];
// }
// SuperType.prototype.sayNmae = function () {
//     console.log(this.name);
// }
// function SubType(name,age) {
//     //继承属性
//     SuperType.call(this, name);
//     this.age = age;
// }
// //继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function () {
//     console.log(this.age);
// }
//
// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors);
// instance1.sayNmae();
// instance1.sayAge();
//
// var instance2 = new SubType("Greg", 27);
// console.log(instance2.colors);
// instance2.sayNmae();
// instance2.sayAge();



console.log("寄生式继承");
function createAnother(original){
    var clone = Object(original);
    clone.sayHi = function () {
        console.log("hi");
    }
    return clone;
}

var person = {
    name : "Nicholas",
    friends : ["Shelbay", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();



console.log("寄生组合式继承");
function SuperType(name) {
    this.name = name;
    this.colors = ["red","blue","green"];
}
SuperType.prototype.sayNmae = function () {
    console.log(this.name);
}
function SubType(name,age) {
    this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
}

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);
instance1.sayNmae();
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
console.log(instance2.colors);
instance2.sayNmae();
instance2.sayAge();
