const http=require('http')
const fs=require('fs')
http.createServer(function(req,res){

   res.writeHead(200,{'Content-Type':'text/html'});
   fs.readFile('index.html',function(error,data){
      if(error){
         res.writeHead(404)
         res.write('error occured')

      }
      else{
         res.write('data');
      }
   })
  
  })
  .listen(8080, function(error){
 if(error){
    console.log('error has occured' +error)
  }
  else{
     console.log('Server is listened through browser')
  }





  });