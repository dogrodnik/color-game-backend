const express = require("express");
const router = express.Router();

const scoreController = require("../controllers/scoreController");

router.get("/scores/:level", scoreController.checkScores);
router.post("/scores/:level/:id", scoreController.postScore);

module.exports = router;
