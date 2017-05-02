// var http = require('http');  
// var url=require('url');  
// http.createServer(function (request, response) {  
//     var pathname = url.parse(request.url).pathname;  
//     var content = '';  
//     var opt = {  
//          host:'https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=31.23037&longitude=121.473701',  
//          port:'80',  
//          method:'GET',  
//          path:pathname  
//     };  
//     var req = http.request(opt, function(res) {  
//         res.on('data',function(body){  
//             console.log('return');  
//             content+=body;  
//         }).on("end", function () {  
//             response.writeHead(200, {'Content-Type': 'text/html'});  
//             response.write(content);  
//             response.end();  
//         });  
//     }).on('error', function(e) {  
//         console.log("Got error: " + e.message);  
//     });  
//     req.end();  
//     console.log(111)
// }).listen(8080);//监听端口80,将80端口的请求转发到news.163.com   
// var http = require("http"),
// 	url = require('url'),
// 	index = require("./index");
// http.createServer(function(req,res){
//     var pathname = url.parse(req.url).pathname;
//     index(pathname,req,res)
// }).listen(8081,function(){
//     console.log("启动成功！")
// });
// var http=require('http');
// var querystring=require('querystring');

// http.createServer(function(req,res){
// 　　var postData='';
// 　　req.setEncoding('utf8');

// 　　req.on('data',function(chunk){
// 　　　　postData+=chunk;
// 　　});
// 　　req.on('end',function(){
// 　　　　res.end(postData+"hehe");
// 　　});
// }).listen(8080);
// console.log("服务启动。。。")