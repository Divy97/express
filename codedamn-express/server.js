const express = require("express");

const app = express();

app.get("/", (re1, res) => [res.send("Hello World")]);
app.listen(8000, () => {
  console.log("server is running");
});