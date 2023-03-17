const express = require("express");
const app = express();
const path = require("path");
const users = require("./routes/users");
const posts = require("./routes/posts");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/users", users);
app.use("/posts", posts);
app.get("/", (req, res) => {
  res.send("Session Login API with Node");
});

app.listen(3000);
