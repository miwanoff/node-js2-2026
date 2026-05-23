const express = require("express");
const app = express();
const port = 8020;
//app.use(express.static(__dirname));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/summer", function (req, res) {
  res.sendFile(__dirname + "/summer.html");
});
app.get("/winter", function (req, res) {
  res.sendFile(__dirname + "/winter.html");
});
app.listen(port, function () {
  return console.log("port is " + port);
});

