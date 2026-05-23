const http = require("http");
const url = require("url");
const fs = require("fs");


function req(request, response) {
  const base = url.parse(request.url);
  const pathname = base.pathname;
  const fileName = "." + pathname;
  console.log(fileName);
  fs.readFile(fileName, function (err, data) {
    if (err) {
      response.writeHead(404, {
        "Content-Type": "text/html; charset=UTF-8",
      });
      return response.end("<h1>404 Не знайдено</h1>");
    }
    response.writeHead(200, {
      "Content-Type": "text/html;; charset=UTF-8",
    });
    response.write(data);
    return response.end();
  });
}
http.createServer(req).listen(5050);
console.log("Server starter");
