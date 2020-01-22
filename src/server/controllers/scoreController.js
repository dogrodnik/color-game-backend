const Score = require("../models/Score");
const helpers = require("../helpers/helpers");

exports.checkScores = async function(req, res) {
  try {
    let { level } = req.params;
    const scores = await Score.find({ level });
    const sortedScores = await helpers.sortRecords(scores);
    res.status(200).send(sortedScores);
  } catch (err) {
    res.status(500).send("Internal server error...");
  }
};

exports.postScore = async function(req, res) {
  try {
    const { level, id } = req.params;
    const time = req.body;
    const record = await Score.find({ name: id });
    if (record.length) {
      res.status(409).send("Selected nickname is taken...");
    } else {
      const scoreRecord = new Score({
        level,
        name: id,
        time
      });
      await scoreRecord.save();
      res.status(200).send(scoreRecord);
    }
  } catch (err) {
    res.status(500).send("Internal server error...");
  }
};
