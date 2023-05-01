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
          video: newVideo,
        },
      });
    }
  );
});

app.patch("/api/videos/:id", (req, res) => {
  const id = req.params.id * 1;
  const videoToUpdate = videoDataObj.find((el) => el.id === id);

  if (!videoToUpdate) {
    return res.status(404).json({
      status: "error",
      message: `Video with ID ${id} not found`,
    });
  }

  Object.assign(videoToUpdate, req.body);
  console.log(videoToUpdate);

  const index = videoDataObj.findIndex((el) => el.id === id);
  videoDataObj[index] = videoToUpdate;

  fs.writeFile(
    `${__dirname}/video-data.json`,
    JSON.stringify(videoDataObj),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Failed to update video",
        });
      }

      res.status(200).json({
        status: "success",
        data: {
          video: videoToUpdate,
        },
      });
    }
  );
});

// delete reviews via patch
// app.patch("/api/videos/:id", (req, res) => {
//   const id = req.params.id * 1;
//   let video = videoDataObj.find((el) => {
//     return el.id === id;
//   });
//   if (!video) {
//     return res.status(404).json({
//       status: "fail",
//       message: `Video with ID ${id} is not found`,
//     });
//   }
//   Object.assign(videoToUpdate, req.body);
//   console.log(videoToUpdate);

//   const index = videoDataObj.findIndex((el) => el.id === id);
//   videoDataObj[index] = videoToUpdate;

//   fs.writeFile(
//     `${__dirname}/video-data.json`,
//     JSON.stringify(videoDataObj),
//     (err) => {
//       if (err) {
//         return res.status(500).json({
//           status: "error",
//           message: "Failed to update video",
//         });
//       }

//       res.status(200).json({
//         status: "success",
//         data: {
//           video: videoToUpdate,
//         },
//       });
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
