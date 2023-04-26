import { AspectRatio } from "react-aspect-ratio";
import { useState, useEffect } from "react";

function Video({ data }) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const allVideos = data.map((video) => {
    const { id, name, age, coolness, src } = video;
    return (
      <div key={id}>
        <p>{name}</p>
        <p>{age}</p>
        <p>{coolness}</p>
        <AspectRatio ratio='16/9' style={{ maxWidth: "1000px" }}>
          <iframe
            src={src}
            allowFullScreen
          />
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
          <h2>Video</h2>
          {allVideos[currentVideo]}
          {/* <AspectRatio ratio='16/9' style={{ maxWidth: "1000px" }}>
            <iframe
              src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'
              allowFullScreen
            />
          </AspectRatio> */}
          <button onClick={prevVideo}>Prev Video</button>
          <button onClick={nextVideo}>Next Video</button>
        </div>
      </div>
    </>
  );
}

export default Video;
