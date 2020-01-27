module.exports = {
  MONGO_INITDB_DATABASE: process.env.MONGO_INITDB_DATABASE,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/test3",
  PORT: "7000"
};
