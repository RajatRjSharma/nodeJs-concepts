import url from "url";

console.log(url);

console.log(url);

const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);
