const fs = require("fs");

// console.log(
//   fs.readFile("index.js", "utf8", (error, data) => console.log(error, data))
// );

console.log(fs.readFileSync("index.js").toString());

// console.log(
//   fs.writeFile("file.txt", "data is here yes", (error, data) =>
//     console.log(error, data)
//   )
// );

console.log(fs.writeFileSync("file.txt", "data is here"));

console.log("done");
