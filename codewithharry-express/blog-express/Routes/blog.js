const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/blogs", (req, res) => {
  blogs.forEach((element) => {
    console.log(element.title);
  });
  res.sendFile(path.join(__dirname, "../templates/blog.html"));
});

module.exports = router;
