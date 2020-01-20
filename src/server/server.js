const express = require("express");
const route = require("./routes/listRoute");

const app = express();

app.use("/", route);

module.exports = app;
