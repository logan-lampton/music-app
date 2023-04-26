const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const fs = require("fs");
const http = require("http");
const url = require("url");

const videoData = fs.readFileSync(`${__dirname}/video-data.json`, "utf-8");
const videoDataObj = JSON.parse(videoData);

app.get("/api", (req, res) => {
  res.json(videoDataObj);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
