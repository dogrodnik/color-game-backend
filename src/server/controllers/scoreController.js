exports.checkScores = async function(req, res) {
  res.send("Hello");
};

exports.postScore = async function(req, res) {
  const { id, time } = req.params;
  res.send(`${id}, ${time}`);
};
