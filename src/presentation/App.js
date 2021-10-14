import { useState, useEffect, useRef } from "react";
import { isSafari, isMobileSafari } from "react-device-detect";
import "./dist/css/main.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NavLinks from "./components/NavLinks";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import background from "./assets/background.mp4";
import BackgroundAlt from "./assets/background.webm";
import Poster from "./assets/background.jpg"
function App() {
  const videoParentRef = useRef();
  const [musicPressed, setMusicPressed] = useState(false);
  const [videosPressed, setVideosPressed] = useState(false);
  const [storyPressed,setStoryPressed]  = useState(false)
 
  const resetAll = () => {
    if (videosPressed) {
      setVideosPressed(false);
    }
    if(musicPressed){
      setMusicPressed(false);
    }
    if(storyPressed){
      setStoryPressed(false)
    }
  };
  const showMusic = () => {
    resetAll();
    setMusicPressed(!musicPressed);
  };
  const showVideos = () => {
    resetAll();
    setVideosPressed(!videosPressed);
  };
  const showStory = () =>{
    resetAll();
    setStoryPressed(!storyPressed);
  }
 
  useEffect(() => {
    // Update the document title using the browser API
    //  document.title = `You clicked ${count} times`;
    if ((isMobileSafari || isSafari) && videoParentRef.current) {
      console.log("safari");
      const player = videoParentRef.current;
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {
                console.log("success");
              })
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                console.log("failed");
                //       setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  });

  return (
    <div>
      <video
        ref={videoParentRef}
        id="background-video"
        poster={Poster}
        preload="metadata"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src={background} type="video/mp4" />
        <source
          src={BackgroundAlt}
          type="video/webm"
          
        />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className={"container"}>
          <NavLinks showMusic={showMusic} showVideos={showVideos} showStory={showStory} />
          <Main
            reset={resetAll}
            showMusic={musicPressed}
            showVideos={videosPressed}
            showStory={storyPressed}
          />
          <Socials />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

