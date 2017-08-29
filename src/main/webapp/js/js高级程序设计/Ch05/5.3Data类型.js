console.log("5.3 Data类型");
// ecmascript的Data类型使用UTC(Coordinated Universal Time)
var now = new Date();
console.log(now.toLocaleString());

console.log("Date.UTC()-基于GMT");
//GMT时间-Greenwich Mean Time 格林尼治标准时间;
var u1 = new Date(Date.UTC(2000, 0 ));
var u2 = new Date(Date.UTC(2000, 0, 5, 17, 55, 55));
console.log(u1.toLocaleString());
console.log(u2.toLocaleString());


console.log("Date.parse()-基于本地时区");
var u3 = new Date(Date.parse(2000, 0 ));
var u4 = new Date(Date.parse(2000, 0, 5, 17, 55, 55));
console.log(u3.toLocaleString());
console.log(u4.toLocaleString());

var u3_1 = new Date(2000, 0);
var u4_1 = new Date(2000, 0, 5, 17, 55, 55);
console.log(u3_1.toLocaleString());
console.log(u4_1.toLocaleString());


console.log("Date.now()");
var start = Date.now();
//do something;
var stop = Date.now();
var result = stop - start;
console.log(result);


//比较大小
var u5 = new Date(2000, 0, 1);
var u5_1 = new Date(2000, 1, 1);
console.log(u5 < u5_1);






