var http=require('http')
const fs=require('fs');
const server=http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'})
fs.readFile('index.html',function(error,data){
   if(error){
     res.writeHead(404);
     res.write('Erroe has occured');
     res.write('File is not found');
   }
     else{
        res.write(data);
     }

    })

  })
  server.listen(8080)
 