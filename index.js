const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {});
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.get("/jobs", (req, res) => {
  res.render("jobs", {});
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/register", (req, res) => {
  res.render("register", {});
});

app.get("/view_company", (req, res) => {
  res.render("view_company", {});
});

app.get("/view_job", (req, res) => {
  res.render("view_job", {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
