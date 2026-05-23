const express = require("express");
const app = express();
const port = 3030;


const users = [
  { user: "Laurence", pass: "password" },
  { user: "Jane", pass: "secret" },
  { user: "Joe", pass: "pass" },
  { user: "Linda", pass: "xxxxpass" },
];
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index2.html");
});
app.get("/users", function (req, res) {
  res.send(users);
});


app.use(express.static(__dirname));


app.listen(port, function () {
  return console.log("port is " + port);
});
