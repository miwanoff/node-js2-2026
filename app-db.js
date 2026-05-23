// const fs = require("fs");
// fs.readFile("./db.json", "utf-8", function (err, data) {
//   const d = JSON.parse(data);
//   console.log(d.message);
// });
// fs.readdir("./", function (err, data) {
//   console.log(data);
// });
// const temp = {
//   greeting: "Welcome to Node",
// };
// fs.writeFile("db1.json", JSON.stringify(temp), function (err) {
//   console.log("file created");
// });

//let temp = {};


// let str ="";
// const fs = require("fs");
// fs.readFile("./db.json", "utf-8", function (err, data) {
//   const d = JSON.parse(data);
//   str = d.greeting;
//   console.log(d.greeting);
// //   temp = {
// //     greeting: d.greeting,
// //   };
// });
// fs.readdir("./", function (err, data) {
//   console.log(data);
// });
// // const temp = {
// //   greeting: `${d.greeting}`
// // };
// fs.writeFile("db1.json", str, function (err) {
//   console.log("file created");
// });

let d;
const fs = require("fs");

// 1. Спочатку читаємо файл
fs.readFile("./db.json", "utf-8", function (err, data) {
  if (err) {
    return console.error("Помилка читання файлу:", err);
  }

  d = JSON.parse(data);
  console.log("Дані з файлу:", d.greeting);

  // 2. Записуємо новий файл ТУТ, коли дані ТОЧНО вже є у змінній `d`
  fs.writeFile("db1.json", JSON.stringify({ greeting: d.greeting }), function (err) {
    if (err) {
      return console.error("Помилка запису файлу:", err);
    }
    console.log("file created");
  });
});

// Ця функція може жити окремо, вона не залежить від файлу db.json
fs.readdir("./", function (err, data) {
  if (!err) console.log("Вміст папки:", data);
});