//he URL module splits up a web address into readable parts.

// const url = require('url');

//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

const http = require('http');
// var fs = require('fs');

const server = http.createServer( (req, res)=> {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end("hi");
  });
});

server.listen(8080,'loacalhost',() => {
    console.log("server is running ")
});