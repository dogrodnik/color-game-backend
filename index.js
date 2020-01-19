const app = require("./src/server/server");

const PORT = 7000;

app.listen(PORT, () => {
  console.log("Server is listening...");
});
