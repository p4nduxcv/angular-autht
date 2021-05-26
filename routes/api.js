const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

const db =
  "mongodb+srv://panduxcv:qtek9100@parkme.lolik.gcp.mongodb.net/eventsdb?retryWrites=true&w=majority";

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
  let users = new User(userData);
  users.save((error, registereduser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registereduser);
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send("Invalid-Email");
      } else if (user.password !== userData.password) {
        res.status(401).send("Invalid-Password");
      } else {
        res.status(200).send(user);
      }
    }
  });
});

module.exports = router;
