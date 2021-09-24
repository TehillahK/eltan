import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import AlbumCover from '../assets/album_covers/got_you.jpg'

function openLink(link){
    window.open(link)
}
function MusicAlbum(props){
    return(
        <div className={"music-card "}>
            <img className={"album-cover"} src={AlbumCover} alt={"got you cover art"} />
            <h3 style={{textAlign:"center"}}>Album title</h3>
            <button className={"download-music"} style={{marginLeft:"auto",marginRight:"auto"}}
            onClick={
                ()=>{
                    openLink('')
                }
            }
            >GET IT NOW</button>
        </div>
    )
}
function MusicAlbums(props){
    const options = {
        items: 1,
    };
     
   
    return(
        <OwlCarousel
        className="owl-theme"
        loop={true}
        margin={0}
        items={1}
     //   options={options} 
        nav> 
            <div class="item">
                <MusicAlbum />
            </div>
            <div class="item">
                <MusicAlbum /> 
            </div>
            <div class="item">
                <MusicAlbum />
            </div>
        
        </OwlCarousel >
    )
}
const MusicSlider = () => {
    return (
        <div>
            <MusicAlbums />
        </div>
     );
}
 
export default MusicSlider;