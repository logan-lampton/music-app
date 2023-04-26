import { AspectRatio } from "react-aspect-ratio";
import { useState, useEffect } from "react";

function Video({ data }) {
  const [currentVideo, setCurrentVideo] = useState(0);

  const allVideos = data.map((video) => {
    const { id, name, age, coolness } = video;
    return (
      <div key={id}>
        <p>{name}</p>
        <p>{age}</p>
        <p>{coolness}</p>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className='video-container'>
          <h2>Video</h2>
          <p>test</p>
          {allVideos[currentVideo]}
          <AspectRatio ratio='16/9' style={{ maxWidth: "1000px" }}>
            <iframe
              src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'
              allowFullScreen
            />
          </AspectRatio>
          {/* {currentVideo} */}
        </div>
      </div>
    </>
  );
}

export default Video;
