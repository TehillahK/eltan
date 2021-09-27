import PropTypes from "prop-types";
import MusicSlider from "./MusicSlider";
import VideoSlider from "./VideoSlider";

function Header(props) {
  const reset = props.reset;
  return (
    <div className={"flex flex-column"}>
      <button
        className={"title"}
        onClick={() => {
          reset();
        }}
      >
        EL-TAN
      </button>
    </div>
  );
}
const Main = (props) => {
  const showMusic = props.showMusic;
  const showVideos = props.showVideos;
  const reset = props.reset;
  return (
    <main className={"grid two-rols main center"}>
      <Header />
      <div>
        {showMusic && <MusicSlider />}
        {showVideos && <VideoSlider />}
      </div>
    </main>
  );
};

Main.propTypes = {
  showMusic: PropTypes.bool,
};
export default Main;

