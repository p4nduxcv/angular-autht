const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("From API Service");
  console.log("git");
});

module.exports = router;
