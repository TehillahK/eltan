import Poster from "../assets/background.jpg";
import MobileVideo from "../assets/background-mobile.mp4"
import MobilePoster from "../assets/mobile-poster.jpg"
import MobileVideoAlt from "../assets/background-mobile.webm"
import { useMediaQuery } from 'react-responsive'
function Desktop(){
    return(
        <video
        
        id="background-video"
        poster={Poster}
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={'https://firebasestorage.googleapis.com/v0/b/mbuwemi-site.appspot.com/o/background.mp4?alt=media&token=82333ea5-0ea9-45da-b8b1-7aacdb6305d8'} type="video/mp4" />
        <source
          src={'https://firebasestorage.googleapis.com/v0/b/mbuwemi-site.appspot.com/o/background.webm?alt=media&token=c023352f-233f-49f0-9e18-05c154371cc1'}
          type="video/webm"
          
        />
        Your browser does not support the video tag.
      </video>
    )
}
function Mobile(){
    return(
        <video
        id="background-video"
        poster={MobilePoster}
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={MobileVideo} type="video/mp4" />
        <source src={MobileVideoAlt} type="video/webm" />
        Your browser does not support the video tag.
      </video>

    )
}
const VideoBackground = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
      const isLandScape = useMediaQuery({ query: '(orientation: landscape)' })
     
    
    return ( 
        <>
          { isDesktopOrLaptop && <Desktop /> }
          { isTabletOrMobile && isPortrait && <Mobile />  }
          {isTabletOrMobile && isLandScape && <Desktop />}

        </>
    );
}
 
export default VideoBackground;