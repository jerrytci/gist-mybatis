console.log("4.2执行环境及作用域")
//所有的变量和函数都保存在执行环境相关联的变量对象。在web浏览器中，变量对象是window对象
/*var color = "blue";
function changeColor(){
    if (color === "blue"){
        color = "red";
    } else {
        color = "blue";
    }
}
changeColor();
console.log("Color is now " + color);*/


//内部环境可以通过作用域链访问所有的外部环境，相反不行
var color = "blue";
function changeColor(){
    var anotherColor = "red";
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        //color, anotherColor, and tempColor are all accessible here
    }
    //color and anotherColor are accessible here, but not tempColor
    swapColors();
}
changeColor();
//anotherColor and tempColor aren't accessible here, but color is
console.log("Color is now " + color);


console.log("4.2.1延长作用域链")
//try-catch语句的catch快
//with语句
//注意：在webstorm直接点击文件然后右键运行的话,会报错，因为location对象没有定义。
/*function buildUrl() {
    var qs = "?debug=true";
    with(location){
        var url = href + qs;
    }
    return url;
}
var result = buildUrl();
console.log(result);*/


// 多次需要使用某对象的属性或方法，照以前的写法，都是通过:对象.属性或者对象.方法来分别获得该对象的属性和方法。
//使用with：可以直接调用属性,而不用写对象名。
function Lakers() {
    this.name = "kobe bryant";
    this.age = "28";
    this.gender = "boy";
}
var people=new Lakers();
with(people)
{
    var str1 = "姓名: " + name;
    var str2 = "年龄：" + age;
    var str3 = "性别：" + gender;
    console.log(str1);
    console.log(str2);
    console.log(str3);
}
// 姓名: kobe bryant
// 年龄：28
// 性别：boy


//js没有块级作用域


//没有使用var定义变量时，就说直接写变量名时，该变量会变成全局变量


//变量搜索过程。从里到外，搜索到了就停止。


