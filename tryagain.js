const http=require('http');
 const server=http.createServer(function(req,res){
      // about the response/ output
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end('Hello World i am Natsnet!');
    })
    server.listen('8089');