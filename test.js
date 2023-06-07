// import http module 

const http = require("http");

// create server 

const server = http.createServer((req, res)=>{

    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");

    res.end("You need to learn node in details ");

})

//starting the server 

server.listen(4000,"localhost",()=>{
    console.log("server is running ");
})