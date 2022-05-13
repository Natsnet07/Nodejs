const http=require('http');
const url=require('url');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
var p= url.parse(req.url,true).query;
var text= p.year +"  "+ p.month;
res.end(text);
   }).listen(8080);
