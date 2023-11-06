const express = require("express");
const app = express();
const port1 = 3000;
const port2 = 80;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port1, () => {
  console.log(`Example app listening
at http://localhost:${port1}`);
});

app.get("/test", (req, res) => {
  res.send("This is a test");
});

app.listen(port2, () => {
  console.log(`Example app listening
  at http://localhost:${port2}`);
});
