const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const db =
  "mongodb+srv://panduxcv:qtek9100@parkme.lolik.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(db, (err) => {
  if (err) {
    console.error(` Error`, err);
  } else {
    console.log("Mongo Elakiri wage wada");
  }
});

router.get("/", (req, res) => {
  res.send("From API Service");
  console.log("git");
});

module.exports = router;
