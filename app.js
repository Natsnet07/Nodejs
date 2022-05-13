const http= require('http');
const fs= require('fs');
const port= 3030;
 http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'})
var b=fs.readFile('index.html',function(error,data){
if(error){
    res.writeHead(404);
    res.write('Error has occured');
}
else{
    res.write(data);
       }
    })
res.end();
  }).listen(8080)