import { AspectRatio } from 'react-aspect-ratio';

function Video() {
  return (
    <div>
      <h2>Video</h2>
      <div className='video-container'>
        <AspectRatio ratio='16/9' style={{ maxWidth: "1000px" }}>
          <iframe
            src='https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'
            allowFullScreen
          />
        </AspectRatio>
      </div>
    </div>
  );
}

export default Video;
