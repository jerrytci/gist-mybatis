console.log("5.4 RegExp类型");
// js元字符：需要转义字符
console.log("()[]{}  \\|  $*  +?.  ^");
//
var str = "\\bat \\cat \\hat \\lat \\bok";
var str2 = "bat cat hat lat";
var pattern1 = /[bc]at/g;
var pattern1_2 = new RegExp("at", "g");

var pattern2 = /\\b/g;
var pattern2_2 = new RegExp("\\\\bcat", "i");

console.log(pattern1.exec(str));
console.log(pattern1_2.exec(str));
console.log(pattern1_2.exec(str).index);
console.log(pattern1_2.exec(str).input);
console.log(pattern1_2.exec(str)[0]);
// console.log(pattern1_2.exec(str)[1]);


console.log(pattern1.exec(str2));
console.log(pattern1_2.exec(str2));

console.log(pattern2.exec(str));
console.log(pattern2_2.exec(str));

console.log(typeof pattern1.exec(str));


console.log("5.4.2 RegExp实例方法");
var text = "cat, bat, sat, fat";
var pattern1 = /.at/;

var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

var pattern2 = /.at/g;

var matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

console.log("5.4.3 RegExp够着函数属性");




