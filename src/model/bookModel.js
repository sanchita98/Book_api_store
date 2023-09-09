const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  availability: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Book", bookSchema);
