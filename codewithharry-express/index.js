const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

// const divyMiddleWare = (req, res, next) => {
//   console.log(req);
// };

// app.use(express.static(path.join(__dirname, "public")));
// app.use(divyMiddleWare);

app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

// app.get("/about", (req, res) => {
//   // res.send("Hello about!!");
//   // res.sendFile(path.join(__dirname, "./index.html"));
//   // res.json({
//   //   Name: "Divy",
//   // });
// });

app.listen(PORT, () => {
  console.log("Running");
});
