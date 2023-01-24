const express = require("express");
const redis = require("redis");

const PORT = 8080;
const app = express();

const client = redis.createClient({
  host: "redis-server",
  por: 6379,
});

client.set("number", 0);
app.get("/", (req, res) => {
  client("number", (err, number) => {
    client.set("number", Number(number) + 1);
    res.send("count:" + number);
  });
});

app.listen(PORT, () => {
  console.log("app is running " + PORT);
});
