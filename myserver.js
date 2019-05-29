var http=require('http');
var myserver=http.createServer(
		function(req,res)
		{
			res.writeHead(200,{'content-type':'text/html'});
			res.write("<h1>Hey</h1>");
			//console.log("Received");
		});
myserver.listen(8000);


console.log("Server:8000");
