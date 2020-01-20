const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(err => {
    console.log(err);
  });

mongoose.connection
  .on("connected", () => {
    console.log("database: connected");
  })
  .on("disconnected", () => {
    console.log("database: disconnected");
  })
  .on("error", err => {
    console.error(err);
  })
  .on("reconnected", () => {
    console.log("database: reconnected");
  });
