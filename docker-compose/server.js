const express = require("express");
const redis = require("redis");

const PORT = 8080;

const client = redis.createClient({
  socket: {
    host: "redis-server",
    port: 6379,
  },
});
const app = express();

app.get("/", async (req, res) => {
  await client.connect();
  let number = await client.get("number");
  if (number === null) {
    number = 0;
  }
  res.send("count:" + number);
  await client.set("number", Number(number) + 1);
  await client.disconnect();
});

app.listen(PORT, () => {
  console.log("app is running " + PORT);
});
