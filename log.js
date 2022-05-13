const http= require('http');
const fs = require('fs');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('indo.html');
    res.write(req.url)
    res.end();
})
.listen(8080);