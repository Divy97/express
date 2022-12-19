const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/about", (req, res) => {
  // res.send("Hello about!!");
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, () => {
  console.log("Running");
});
