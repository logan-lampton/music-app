import { AspectRatio } from "react-aspect-ratio";
import { useState, useEffect } from "react";

function Video({ data }) {
  // const [currentVideo, setCurrentVideo] = useState([]);

  const singleVideo = data.map((video) => {
    const { name, age, coolness } = video;
    return (
      <>
        <p>{name}</p>
        <p>{age}</p>
        <p>{coolness}</p>
      </>
    );
  });

  console.log(singleVideo)

  // useEffect(() => {
  //   setCurrentVideo(singleVideo);
  // }, []);

  return (
    <>
      <div>
        <div className='video-container'>
          <h2>Video</h2>
          <p>test</p>
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
