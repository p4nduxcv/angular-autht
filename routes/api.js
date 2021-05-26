const express = require("express");
const jwt = require("jsonwebtoken");
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

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized Request");
  }

  let token = req.headers.authorization.split(" ")[1];

  if (token === "nul") {
    return res.status(401).send("unauthorized Null Request");
  }

  let payload = jwt.verify(token, "gammacthama");
  if (!payload) {
    return res.status(401).send("unauthorized payload Request");
  }

  req.userId = payload.subject;
  next();
}

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
      let payload = { subject: registereduser._id };
      let token = jwt.sign(payload, "gammacthama");
      res.status(200).send({ token });
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
        let payload = { subject: user._id };
        let token = jwt.sign(payload, "gammacthama");
        res.status(200).send({ token });
      }
    }
  });
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Uddika Putha",
      description: "Sudu araliya mala",
      date: "2021-2-3",
    },
    {
      _id: "3",
      name: "Uddika Putha",
      description: "Sudu araliya mala",
      date: "2025-8-5",
    },
  ];
  res.json(events);
});

router.get("/special", verifyToken, (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Uddika Putha",
      description: "Sudu araliya mala",
      date: "2021-2-3",
    },
    {
      _id: "3",
      name: "Uddika Putha",
      description: "Sudu araliya mala",
      date: "2025-8-5",
    },
  ];
  res.json(events);
});

module.exports = router;
