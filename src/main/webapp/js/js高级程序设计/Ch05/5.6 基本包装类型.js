console.log("5.6基本包装类型");
var obj = new Object("some text");
console.log(obj instanceof Object);
console.log(obj instanceof String);
var obj2 = "some text";
console.log(obj2 instanceof Object);
console.log(obj2 instanceof String);
var obj3 = new String("some text");
console.log(obj3 instanceof Object);
console.log(obj3 instanceof String);

var val = "25";
var num = Number(val);
console.log(typeof num);


console.log("5.6.1 Boolean类型");


console.log("5.6.2 Number类型");
var num2 = 10;
console.log(num2.toString(2));
console.log(num2.toString(8));
console.log(num2.toString(10));
console.log(num2.toString());
console.log(num2.toString(16));

console.log("toFixed  toExponential  toPrecision");
var num3 = 10;
console.log(num3.toFixed(2));
console.log(num3.toExponential(1));

var num4 = 99;
console.log(num4.toPrecision(1));
console.log(num4.toPrecision(2));
console.log(num4.toPrecision(3));


console.log("5.6.3 String类型");
console.log("1 字符方法");
var str = "hello world";
console.log(str.charAt(1));     //e
console.log(str.charCodeAt(1));


console.log("2 字符串操作方法 concat slice substr substring");
var str2 = "hello world";
console.log(str2.concat("!","哈哈"));

console.log(str2.slice(3));
console.log(str2.substr(3));
console.log(str2.substring(3));
console.log(str2.slice(4,5));
console.log(str2.substr(4,5));  //第二个是长度
console.log(str2.substring(4,5));


console.log("参数是负数时");
console.log("第一个参数是负数");
//当负数 + 字符串长度 > 0
// 加上字符串的长度
console.log(str2.slice(-3));
console.log(str2.substr(-3));
//变为0
console.log(str2.substring(-3));

//当负数 + 字符串长度 < 0
//全部设为0
console.log(str2.slice(-14));
console.log(str2.substr(-14));
console.log(str2.substring(-14));

//当参数 > 字符串长度
//结果：空字符串
console.log(str2.slice(15));
console.log(str2.substr(15));
console.log(str2.substring(15));

console.log("第二个参数为负数");
//当负数 + 字符串长度 > 0
// 加上字符串的长度
console.log(str2.slice(3,-4));
//负数变为0.
console.log(str2.substr(3,-4));
//负数变为0.并且参数位置互换
console.log(str2.substring(3,-4));

//当负数 + 字符串长度 < 0
//全部设为0
console.log(str2.slice(3,-15));
console.log(str2.substr(3,-15));
console.log(str2.substring(3,-15));

//当参数 > 字符串长度
//结果：参数 = 字符串长度
console.log(str2.slice(-30, 50));
console.log(str2.substr(-30, 50));
console.log(str2.substring(-30, 50));
console.log(str2.substring(-30, 050));

console.log("其他");
//当第一个参数 > 字符串长度;第二个参数 < 字符串长度
console.log(str2.slice(15, 5));
console.log(str2.substr(15, 5));
console.log(str2.substring(15, 5));     //因为可以互换，所以有值


console.log("3 字符串位置方法 indexOf() 和 lastIndexOf()");


console.log("4 trim()方法 trim() trimLeft() trimRight()");


console.log("5 大小写转换 toLocaleLowerCase() toLocaleUpperCase() toLowerCase() toUpperCase()");


console.log("6 字符串的模式匹配方法 match()(exec()) search() replace()");
var text = "cat, bat, sat, fat";
var pattern = /.at/;

//于pattern.exec(text)相同
var matches = text.match(pattern);
console.log(matches.index);        //0
console.log(matches[0]);           //"cat"
console.log(pattern.lastIndex);    //0
console.log(matches[1]);
console.log(typeof matches);
console.log(matches instanceof Array);
console.log(matches.length);


var pos = text.search(/at/);
console.log(pos);   //1

var result = text.replace("at", "ond");
console.log(result);    //"cond, bat, sat, fat"

result = text.replace(/at/g, "ond");
console.log(result);    //"cond, bond, sond, fond"

result = text.replace(/(.at)/g, "word ($1)");
console.log(result);    //word (cat), word (bat), word (sat), word (fat)

function htmlEscape(text){
    return text.replace(/[<>"&]/g, function(match, pos, originalText){
        switch(match){
            case "<":
                return "<2";
            case ">":
                return ">2";
            case "&":
                return "&2";
            case "\"":
                return "\"2";
        }
    });
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));

var colorText = "red,blue,green,yellow";
var colors1 = colorText.split(",");      //["red", "blue", "green", "yellow"]
var colors2 = colorText.split(",", 2);   //["red", "blue"]
var colors3 = colorText.split(/[^\, ]+/); //["", ",", ",", ",", ""]

console.log(colors1);
console.log(colors2);
console.log(colors3);


console.log("7 localeCompare()");
var stringValue = "yellow";
console.log(stringValue.localeCompare("brick"));  //1
console.log(stringValue.localeCompare("yellow")); //0
console.log(stringValue.localeCompare("zoo"));    //-1

function determineOrder(value) {
    var result = stringValue.localeCompare(value);
    if (result < 0){
        console.log("The string 'yellow' comes before the string '" + value + "'.");
    } else if (result > 0) {
        console.log("The string 'yellow' comes after the string '" + value + "'.");
    } else {
        console.log("The string 'yellow' is equal to the string '" + value + "'.");
    }
}

determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");


console.log("8 fromCharCode()");
console.log(String.fromCharCode(104,101,108,108,111));

