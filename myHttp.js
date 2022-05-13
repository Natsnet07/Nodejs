const http=require('http');
http.createServer(function(req,res){
   res.write('Hellllooooo woooorld!!');
   res.end();
    }).listen(8080);