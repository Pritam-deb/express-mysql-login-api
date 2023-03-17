const express = require("express");
const app = express();
const path = require("path");
const users = require("./routes/users");
const posts = require("./routes/posts");
const login = require("./routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/users", users);
app.use("/posts", posts);
app.use("/login", login);
app.get("/", (req, res) => {
  res.send("Session Login API with Node");
});

app.listen(3000);
