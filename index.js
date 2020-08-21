var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    if(req.url === "/five"){setTimeout(()=>{
        res.write('Hello World!');
        res.end();
    }, 5000)}
    if(req.url === "/three"){setTimeout(()=>{
        res.write('Hello World!');
        res.end();
    }, 3000)}
    
}).listen(3000);