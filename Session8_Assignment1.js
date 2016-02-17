
//If you want to add numbers in command prompt you ad two numbers

var http = require('http');
var async = require('async');
//import async modules locally

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  async.series({
	  one:function(callback){
		  callback(null,1);
	  },200);
	  two:function(callback){
		  callback(null,2);
	  },100);
  },
 
});

function(err,res){
	//results is euql to{one:1,two:200}
});
response.end('First Node.Js app');
});
server.listen(8000);

//run this example
//node example3.js 10 30