const express = require("express");
const cors = require("cors");
const route = require("./routes/listRoute");

const app = express();

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://dogrodnik.github.io/color-game/"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/", route);

module.exports = app;
