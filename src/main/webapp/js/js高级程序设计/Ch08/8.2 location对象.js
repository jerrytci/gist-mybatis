console.log("8.2 location对象");
// window.location;
// document.location;
function getQueryStringArgs(){
    //get query string without the initial ?
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
        //object to hold data
        args = {},
        //get individual items
        items = qs.length ? qs.split("&") : [],
        item = null,
        name = null,
        value = null,
        //used in for loop
        i = 0,
        len = items.length;

    //assign each item onto the args object
    for (i=0; i < len; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length){
            args[name] = value;
        }
    }
    return args;
}
//assume query string of ?q=javascript&num=10
var args = getQueryStringArgs();
console.log(args["q"]);     //"javascript"
console.log(args["num"]);   //"10"

console.log("8.2.2 位置操作");
location.assign("http://www.baidu.com");
location.href = "http://www.baidu.com";
location = "http://www.baidu.com";

// location.hash;

// location.search;
// location.hostname;
// location.pathname;
// location.port;

//replace 没有记录
location.replace("http://www.wrox.com/");

location.reload()   //从缓存
location.reload(true)   //从服务器
