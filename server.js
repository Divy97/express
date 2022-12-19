const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("Here");
  //   res.send("Hi");
  res.render("index", { text2332: "world" });
});

app.listen(3000);
