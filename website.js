import http from "http";
import fs from "fs";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    const readfile = fs.readFileSync("./index.html");
    res.end(readfile.toString());
  } else if (req.url == "/about") {
    res.end("<h1>About rajat</h1>");
  } else if (req.url == "/home") {
    res.end("<h1>Code with rajat</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Not found 404</h1>");
  }
});

server.listen(port, () => {
  console.log("Server is listening on port " + port);
});
