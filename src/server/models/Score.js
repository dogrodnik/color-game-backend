const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Score = new Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
