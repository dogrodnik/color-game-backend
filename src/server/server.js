const express = require("express");
const cors = require("cors");
const route = require("./routes/listRoute");

const app = express();

app.use(
  cors({
    origin: "https://dogrodnik.github.io/color-game/"
  })
);
app.use(express.json());
app.use("/", route);

module.exports = app;
