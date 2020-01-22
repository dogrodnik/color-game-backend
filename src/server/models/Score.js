const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const scoreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: Object,
    required: true
  },
  level: {
    type: String,
    required: true
  }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
