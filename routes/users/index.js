const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All users page");
});

router.get("/single-page", (req, res) => {
  res.send("This is single user page");
});

module.exports = router;
