const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// middleware:
app.use(express.json());

const fs = require("fs");
// const http = require("http");
// const url = require("url");

const videoData = fs.readFileSync(`${__dirname}/video-data.json`, "utf-8");
const videoDataObj = JSON.parse(videoData);

app.get("/api/videos", (req, res) => {
  res.json(videoDataObj);
});

app.post("/api/videos", (req, res) => {
  const newId = videoDataObj[videoDataObj.length - 1].id + 1;
  const newVideo = Object.assign({ id: newId }, req.body);

  videoDataObj.push(newVideo);
  fs.writeFile(
    `${__dirname}/video-data.json`,
    JSON.stringify(videoDataObj),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          newVideo,
        },
      });
    }
  );
});

app.patch("api/videos/:id", (req, res) => {
  const video = videoDataObj.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      video: video,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
