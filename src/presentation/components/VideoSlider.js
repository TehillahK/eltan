import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function VideoCard(props) {
  const videoLink = "https://www.youtube.com/embed/uQTgfqUwRlY";
  return (
    <div className={"video-card"}>
      <div className={"music-video"}>
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
  return (
    <OwlCarousel
      className="owl-theme"
      loop={false}
      margin={50}
      items={1}
     // center={true}
      // options={options}
      nav
    >
      <div class="item">
        <VideoCard />
      </div>
      <div class="item">
        <VideoCard />
      </div>
      <div class="item">
        <VideoCard />
      </div>
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

