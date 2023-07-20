const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    default: "",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: "",
  },
  token: {
    type: String,
  },
  authTokenIssueAt: {
    type: Number,
  },
  role: {
    type:String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", UserSchema);
