const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "./Routes/blog")));

app.listen(PORT, () => {
  console.log(`Blog app listening at ${PORT}`);
});
