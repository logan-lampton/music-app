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

app.get("/api/videos/:id", (req, res) => {
  const id = req.params.id * 1;
  let video = videoDataObj.find((el) => {
    return el.id === id;
  });
  if (!video) {
    return res.status(404).json({
      status: "fail",
      message: `Video with ID ${id} is not found`,
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      video: video,
    },
  });
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

// app.patch("api/videos/:id", (req, res) => {
//   const video = videoDataObj.find(
//     (video) => video.id === parseInt(req.params.id)
//   );
//   fs.writeFile(`${__dirname}/video-data.json`, JSON.stringify(video));
// });

// app.patch("/api/videos/:id", (req, res) => {
//   let id = req.params.id;
//   let rating = req.body;

//   videoDataObj
//     .findByIdAndUpdate(id, { $set: { rating: rating } }, { new: true })
//     .then(res.send("Video review updated by id through PATCH"));
// });

app.patch("api/videos/:id", (req, res) => {
  let id = req.params.id * 1;
  let videoToUpdate = videoDataObj.find((video) => video.id === id);
  let index = videoDataObj.indexOf(videoToUpdate);

  // updates the videoToUpdate object to be the same as the original video + the changes in the req body
  Object.assign(videoToUpdate, req.body);

  videoDataObj[index] = videoToUpdate;

  fs.writeFile(
    `${__dirname}/video-data.json`,
    JSON.stringify(videoDataObj),
    (err) => {
      res.status(200).json({
        status: "success",
        data: {
          videoToUpdate,
        },
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
