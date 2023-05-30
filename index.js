const express = require("express");

const app = express();

app.use(express.static(__dirname + "/build/index.html"));

app.get("*", async (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(process.env.PORT || 5000, () => console.log("successs"));
