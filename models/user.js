const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email:String,
  cohort: String,
  avatar: String,
  googleId: String
},{
  timestamos: true
});

module.exports = mongoose.model("User", userSchema);