import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getVideos } from "../../business/AccessVideos";
function VideoCard(props) {
  const videoLink = props.videoLink;
  return (
    <div className={"video-card"}>
      <div className={"music-video "}>
        <iframe
          width="280"
          height="200"
          src={videoLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div></div>
    </div>
  );
}

function Videos() {
  const musicVideos=getVideos();
  const videoList = musicVideos.map((musicVideo)=>
    <div key={musicVideo.id}  class="item">
        <VideoCard  videoLink={musicVideo.link} />
      </div>
  )
  return (
    <OwlCarousel
      className="owl-theme"
      loop={false}
      margin={50}
      items={1}
      video={true}
      videoHeight={true}
     // center={true}
      // options={options}
      nav
    >
      {videoList}
    </OwlCarousel>
  );
}
const VideoSlider = () => {
  return (
    <div>
      <Videos />
    </div>
  );
};

export default VideoSlider;

