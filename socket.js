const express = require("express");
const app = express();
const port = 6000;


// Підключення HTTP-сервера та Socket.io
const http = require("http").createServer(app);
const io = require("socket.io")(http);


// Головний роут
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index3.html");
});


// Статичні файли - шлях до кореневої папки
app.use(express.static(__dirname));


// Робота з веб-сокетами
io.on("connection", function (s) {
  console.log("ready to use socket, user connected: " + s.id);
 
  s.on("player", function (id) {
    console.log("Player name received: " + id);
  });
});


// Запускаємо http-сервер
http.listen(port, function () {
  console.log("ready " + port);
});
