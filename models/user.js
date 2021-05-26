const mongoose = require("mongoose");

const schema = mongoose.schema;

const userSchema = new schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema, "users");
