const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.listen(5000, () => console.log("Listening on port 5000"));
