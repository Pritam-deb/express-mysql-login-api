const express = require("express");
const app = express();

const users = require("./routes/users");
const posts = require("./routes/posts");

app.use("/users", users);
app.use("/posts", posts);
app.get("/", (req, res) => {
  res.send("Session Login API with Node");
});

app.listen(3000);
