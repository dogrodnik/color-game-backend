const Score = require("../models/Score");

exports.checkScores = async function(req, res) {
  const scores = await Score.find();
  res.send(JSON.stringify(scores));
};

exports.postScore = async function(req, res) {
  try {
    const { level, id, time } = req.params;
    const scoreRecord = new Score({
      level,
      name: id,
      time
    });
    await scoreRecord.save();
    res.status(200).send(scoreRecord);
  } catch (err) {
    res.status(500).send("Internal server error...");
  }
};
