// import http module

const http = require("http");

// creating a server 
// import http module
const http = require("http");

// creating a server
res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
const server = http.createServer((req, res) => {
  res.end("You need to learn JavaScript concepts");
});

// calling the server
server.listen(4000, 'localhost', () => {
  console.log("Server is running");
});
