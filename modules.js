// Every file is a module by default.

// A module is a piece of reusable JavaScript code.Modules help developers adhere to the DRY (Don't Repeat Yourself) principle in programming.

// ///////        1.  Built-in Modules    ////////////////////

// Node.js has a set of built-in modules which you can use without any further installation.

//To include a module, use the require() function with the name of the module.The name of the module must be in quotation marks. Also, using const to declare the variable ensures that you do not overwrite the value when calling it.

// Some common examples of built-in Node modules are the following:

// 1. http
// 2. url
// 3. path
// 4. fs
// 5. os

//here, we use the require function to load the built-in http module. Then, we save the returned value in a variable named http. Now our application has access to the HTTP module, and is able to create a server.The returned value from the http module is an object. 

const http = require('http');
// console.log(http);

const server = http.createServer((req,res)=>{
    res.end("welcome to build in  modules part");
});

server.listen(8080,"localhost",()=>{
    console.log("server is running in modules.js file ");
}) ;

////////////      2. Local modules   ////////////////

// here , we import data from app.js file .here, we  need to provide the path of the file as an argument.

const{ name, age, subject , experience, address } = require("./app");

console.log(name);
console.log(age);
console.log(subject);
console.log(experience);
console.log(address);
console.log(address.country);

/////////         3. Third-Party Modules          //////////////////////

//A cool thing about using modules in Node.js is that you can share them with others. The Node Package Manager (NPM) makes that possible. When you install Node.js, NPM comes along with it.

const capitalize = require('capitalize');

console.log(capitalize("hello")) ;// It performs functions like capitalizing the first letter of a word.

