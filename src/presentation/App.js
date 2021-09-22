import { useState } from "react";
import "./scss/main.scss";
import Main from "./components/Main";
import NavLinks from "./components/NavLinks";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import background from "./assets/background.mp4";
function App() {
  const[musicPressed,setMusicPressed]=useState(false);

  const showMusic =()=>{
    setMusicPressed(!musicPressed)
  }
  return (
    <div>
      <video autoPlay muted loop id="background-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className={"container"}>
          <NavLinks showMusic={showMusic} />
          <Main showMusic={musicPressed} />
          <Socials />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

