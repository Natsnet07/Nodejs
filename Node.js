const http=require('http');
var dt=require('./myModule');
 http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('Current date of today is:' +dt.myDate());
    res.end();
     })
     .listen(8080);