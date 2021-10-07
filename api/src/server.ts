require('dotenv').config();
var http = require("http");
var os = require("os");

http
  .createServer(function (req: any, res: any) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello World 0.0.0.0/8000 ${process.env.NODE_ENV} \n`);
  })
  .listen(8000);
