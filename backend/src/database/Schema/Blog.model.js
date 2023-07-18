const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  ObjectID = mongoose.Schema.Types.ObjectId;

const BlogSchema = new Schema({
  user_id: {
    type: ObjectID,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});
