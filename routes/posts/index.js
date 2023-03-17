const express = require("express");
const router = express.Router();
//THESE ARE ROUTER LEVEL MIDDLEWARES
//global middleware ---> order of the global middleware matters,
router.use((req, res, next) => {
  console.log(new Date().toLocaleDateString());
  next();
});

//chain of middlewares
router.get("/", [
  (req, res, next) => {
    console.log("this is middleware 1");
    next(); //passes the control to next middleware, even used for global middlewares
  },
  (req, res, next) => {
    console.log("This is middleware again");
    res.send("All posts page");
  },
]);

router.get("/:username", (req, res) => {
  res.render("profile", { username: req.params.username });
  // res.send(`This is ${req.params.username}'s page`);
});

module.exports = router;
