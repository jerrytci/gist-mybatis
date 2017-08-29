console.log("5引用类型");
//引用类型有时候叫对象定义
//构造函数本就是一个函数，只不过函数是出于创建新对象的目的而定义的。
/*function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string"){
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    console.log(output);
}

displayInfo({
    name: "Nicholas",
    age: 29
});
displayInfo({
    name: "Greg"
});*/


//必须值使用命名函数，而使用对象字面量来封装多个可选参数
function displayInfo(name,args) {
    var output = "";
    if (typeof name == "string"){
        output += "Name: " + name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
    console.log(output);
}

displayInfo("Nicholas",{
    age: 29
});
displayInfo("Greg",{
});


// [] 1 可以通过变量来访问属性。2 对象属性名会导致语法错误的字符，关键字或保留字。
//3除了上面两种情况，首选点表示法来访问对象属性。
var person = {
    "name": "jerry",
    "first name": "chen"
};
var propertyName = "name";
console.log(person[propertyName]);
// console.log(person.first name);
console.log(person["first name"]);


