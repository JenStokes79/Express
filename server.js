

//opening one server
// var http = require('http');

// var PORT = 8080;

// function handleRequest(request, response) {
// 	response.end("It Works! Path hit: " + request.url);

// }

// var server = http.createServer(handleRequest);

// server.listen(PORT, function(){
// 	console.log("server listening on http://localhost:%s", PORT); // or no %s, end quotes and + PORT
// });


//opening multiple servers
var http = require('http');

var PORT = 7000;
var PORT1 = 7500;

function handleRequest(request, response){
response.end("Have a lovely day!" + request.url);
}

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
	console.log("server listening on http://localhost:%s ", PORT);
});

function handleNewRequest(request, response){
response.end("Have a horrible day!" + request.url);
}

var server = http.createServer(handleNewRequest);
server.listen(PORT1, function(){
	console.log("server listening on http://localhost:%s ", PORT1);

});

