import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify , faYoutube} from '@fortawesome/free-brands-svg-icons'

function Buttons(){
    return(
        <div className={"flex flex-row space-between buttons"}>
            <input className={"text-box"} />
            <button className={"transparent-button"}>Join</button>
            <button className={"youtube-button"}>
                <FontAwesomeIcon className="button-icon" icon={faYoutube} />
                youtube
            </button>
            <button className={"spotify-button"}>
                <FontAwesomeIcon className="button-icon" icon={faSpotify} />
                follow
            </button>
        </div>
    )
}
const Footer = () => {
    return ( 
        <footer className={"grid center"}>
           <div className={"flex flex-column center"}>
                <Buttons />
                <p className={"copyright-line"}>&#169; 2021 Rich Avenue All Rights Reserved</p>
           </div>
        </footer>
     );
}
 
export default Footer;