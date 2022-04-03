const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("tadaima!");
  console.log("home page opened");
});

app.get("/test", (req, res) => {
  res.send("test page i shere");
});

app.listen(3000);
