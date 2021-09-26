import { useState,useEffect,useRef } from "react";
import { isSafari,isMobileSafari } from "react-device-detect";
import "./dist/css/main.css";
import Header from "./components/Header"
import Main from "./components/Main";
import NavLinks from "./components/NavLinks";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import background from "./assets/background.mp4";
import BackgroundAlt from "./assets/background.webm"



function App() {
  const videoParentRef = useRef();
  const[musicPressed,setMusicPressed]=useState(false);
  const [reset,setReset]=useState(false);
  useEffect(() => {
    // Update the document title using the browser API
  //  document.title = `You clicked ${count} times`;
    if((isMobileSafari || isSafari) && videoParentRef.current){
      console.log("safari")
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
              .then(() => {console.log("success")})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                console.log("failed")
         //       setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  });
  const showMusic =()=>{
    setMusicPressed(!musicPressed)
  }
  const resetAll=()=>{
    setReset(!reset)
    if(reset){
      setMusicPressed(false);
    }
  }
  return (
    <div>
      <video ref={videoParentRef} preload="metadata" playsInline  autoPlay  muted loop id="background-video" >
        <source src={background} type="video/mp4" />
        <source src={BackgroundAlt} type="video/webm" onerror="fallback(parentNode)" />
      Your browser does not support the video tag.
      </video>
      <div className="content">
       
        <div className={"container"}>
          <NavLinks showMusic={showMusic} />
          <Main reset={resetAll}  showMusic={musicPressed} />
          <Socials />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

