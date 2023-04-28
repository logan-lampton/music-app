import { AspectRatio } from "react-aspect-ratio";
import { useState, useEffect } from "react";

// MAKE VIDEOS PLAY AUTOMATICALLY

function Video({ data }) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const allVideos = data.map((video) => {
    const { id, artist, title, link } = video;
    return (
      <div key={id}>
        <h2>{artist}</h2>
        <h3>{title}</h3>
        <AspectRatio ratio='16/9' style={{ maxWidth: "1000px" }}>
          <iframe src={link} allowFullScreen />
        </AspectRatio>
      </div>
    );
  });

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

  return (
    <>
      <div>
        <div className='video-container'>
          {allVideos[currentVideo]}
          <div className='video-buttons'>
            <button onClick={prevVideo}>Prev Video</button>
            <button onClick={nextVideo}>Next Video</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
