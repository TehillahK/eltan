import { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";
import { addEmail } from '../../business/AccessEmail';
function Buttons() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
   // alert(`The name you entered was: ${email}`);
    addEmail(email);
    setEmail("")
  }
  return (
    <div className={"flex flex-row buttons"}>
      <form  className={"flex flex-row "}  onSubmit={handleSubmit}>
          <input
            className={"text-box"}
            placeholder="Enter Email"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <input type="submit" className={"transparent-button"} />
      </form>
      <button className={"youtube-button"}>
        <FontAwesomeIcon className="button-icon" icon={faYoutube} />
        Youtube
      </button>
    </div>
  );
}
const Footer = () => {
  return (
    <footer className={"grid auto-cols center "}>
      <div className={"flex flex-column center footer"}>
        <Buttons />
        <p className={"copyright-line"}>
          &#169; 2021 Rich Avenue All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

