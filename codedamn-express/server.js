// const express = require("express");

// const app = express();

// app.get("/", (re1, res) => [res.send("Hello World")]);
// app.get("/something", (re1, res) => [res.send("Hello Something")]);
// app.listen(8000, () => {
//   console.log("server is running");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world").end();
});

app.get("/what-is-my-method", (req, res) => {
  res.send("GET").end();
});

app.post("what-is-my-method", (req, res) => {
  res.send("POST").end();
});

app.put("what-is-my-method", (req, res) => {
  res.send("PUT").end();
});

app.delete("what-is-my-method", (req, res) => {
  res.send("DELETE").end();
});

app.patch("what-is-my-method", (req, res) => {
  res.send("PATCH").end();
});

app.listen(8000, console.log("listening on port 1337"));
