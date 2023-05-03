import { AspectRatio } from "react-aspect-ratio";
import { useState, useEffect } from "react";
import Rating from "./Rating";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Video({ data, setData }) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const prevVideo = () => {
    setCurrentVideo((currentVideo) => {
      const backVideo = currentVideo - 1;
      if (backVideo < 0) {
        return allVideos.length - 1;
      }
      return backVideo;
    });
  };

  const nextVideo = () => {
    setCurrentVideo((currentVideo) => {
      const followingVideo = currentVideo + 1;
      if (followingVideo > allVideos.length - 1) {
        return 0;
      }
      return followingVideo;
    });
  };

  const allVideos = data.map((video) => {
    const { id, artist, title, link, rating } = video;
    return (
      <div key={id}>
        <h2>{artist}</h2>
        <h3>{title}</h3>
        <AspectRatio ratio='16/9' style={{ maxWidth: "1000px" }}>
          <iframe src={link} allow='autoplay' allowFullScreen />
        </AspectRatio>
        <Stack spacing={2} direction='row' className='video-buttons'>
          <Button variant='contained' onClick={prevVideo}>
            Prev Video
          </Button>
          <Button variant='contained' onClick={nextVideo}>
            Next Video
          </Button>
        </Stack>
        <Rating id={id} rating={rating} setData={setData} />
      </div>
    );
  });

  return (
    <>
      <div>
        <div className='video-container'>{allVideos[currentVideo]}</div>
      </div>
    </>
  );
}

export default Video;
