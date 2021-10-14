import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import AlbumCover from "../assets/album_covers/got_you.jpg";
import {getSongs} from "../../business/AccessMusic"

function openLink(link) {
  window.open(link);
}
function MusicAlbum(props) {
  const albumCover=props.albumCover;
  const albumTitle=props.title;
  const link=props.link;
  return (
    <div className={"music-card "}>
      <img
        className={"album-cover"}
        src={albumCover}
        alt={`${albumTitle} cover art`}
      />
      <h3 className={"album-title"} style={{ textAlign: "center" }}>{albumTitle}</h3>
      <button
        className={"download-music"}
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onClick={() => {
          openLink(link);
        }}
      >
        GET IT NOW
      </button>
    </div>
  );
}
function MusicAlbums(props) {

  const songs = getSongs().map((song)=>
    <div key={song.id} class="item">
        <MusicAlbum albumCover={song.coverArt} title={song.title} link={song.link} />
    </div>
  )
  const options = {
    items: 1,
  };

  return (
    <OwlCarousel
      className="owl-theme"
      loop={false}
      margin={50}
      items={1}
      center={true}
      // options={options}
      nav
    >
      {songs}
    </OwlCarousel>
  );
}
const MusicSlider = () => {
  return (
    <div>
      <MusicAlbums />
    </div>
  );
};

export default MusicSlider;

