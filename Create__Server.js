const http = require("http");

function datacontrol(req, res) {
  res.write("<h1>Hello , I'm Bob!</h1>");
  res.end();
}
http.createServer(datacontrol).listen(4500);
