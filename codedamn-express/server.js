const express = require("express");
const path = require("path");
const app = express();

// app.get("/", (re1, res) => [res.send("Hello World")]);
// app.get("/something", (re1, res) => [res.send("Hello Something")]);
// app.listen(8000, () => {
//   console.log("server is running");
// });

// app.get("/", (req, res) => {
//   res.send("hello world").end();
// });

// app.get("/what-is-my-method", (req, res) => {
//   res.send("GET").end();
// });

// app.post("what-is-my-method", (req, res) => {
//   res.send("POST").end();
// });

// app.put("what-is-my-method", (req, res) => {
//   res.send("PUT").end();
// });

// app.delete("what-is-my-method", (req, res) => {
//   res.send("DELETE").end();
// });

// app.patch("what-is-my-method", (req, res) => {
//   res.send("PATCH").end();
// });

// static data to server

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});
app.listen(8000, console.log("listening on port 8000"));
