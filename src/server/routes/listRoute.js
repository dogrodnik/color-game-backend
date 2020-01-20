const express = require("express");
const router = express.Router();

const scoreController = require("../controllers/scoreController");

router.get("/scores", scoreController.checkScores);
router.post("/scores/:id/:time", scoreController.postScore);

module.exports = router;
