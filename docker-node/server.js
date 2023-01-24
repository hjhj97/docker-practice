const express = require("express");

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log("app is running on " + PORT);
});
