import { useState } from "react";
import "./dist/css/main.css";
import Header from "./components/Header"
import Main from "./components/Main";
import NavLinks from "./components/NavLinks";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import background from "./assets/background.mp4";
function App() {
  const[musicPressed,setMusicPressed]=useState(false);
  const [reset,setReset]=useState(false);
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
      <video autoPlay controls="true" muted loop id="background-video">
        <source src={background} type="video/mp4" />
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

