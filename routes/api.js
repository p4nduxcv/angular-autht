const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

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

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save(err, (registereduser) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(registereduser);
    }
  });
});

module.exports = router;
