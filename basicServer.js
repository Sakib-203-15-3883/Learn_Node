// importing the http module 
//This line imports the built-in http module, which provides functionality for creating HTTP servers and making HTTP requests.

const http = require('http');

//Creating a server using http.createServer

//Here, we use the http.createServer method to create an HTTP server. It takes a callback function that will be executed whenever a request is made to the server. The callback function has two parameters: req (the request object) and res (the response object). Inside this callback function, you define the logic for handling the incoming request and generating a response.

const server = http.createServer((req,res)=>{
    
    //Setting the response status code and headers:now
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');

    //Sending the response:

    res.end('what,s up');
})

//Starting the server with server.listen:

//The server.listen method is used to start the server and make it listen for incoming requests. It takes the port number (3000 in this example) and an optional hostname ('localhost' in this example). The callback function is executed once the server starts listening, and it logs a message indicating that the server is running.

server.listen(3000,'localhost',()=>{
    console.log("server is running ")
});


//// when we run this project in another device then to run this command in terminal " npm install" then it,s installed all the dependencies.