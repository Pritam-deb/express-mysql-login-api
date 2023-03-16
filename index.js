const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Session Login API with Node");
});

app.listen(3000);
