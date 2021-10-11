import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify , faYoutube} from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/logo.png'
import { addEmail } from '../../business/AccessEmail';
function Buttons(){
    return(
        <div className={"flex flex-row space-between buttons"}>
            <input className={"text-box"} />
            <button className={"transparent-button"} onClick={
                ()=>{
                    addEmail();
                }
            }>Join</button>
            <button className={"youtube-button"}>
                <FontAwesomeIcon className="button-icon" icon={faYoutube} />
                youtube
            </button>
        </div>
    )
}
const Footer = () => {
    return ( 
        <footer className={"grid auto-cols center "}>
           
           <div className={"flex flex-column center footer"}>
                <Buttons /> 
                <p className={"copyright-line"}>&#169; 2021 Rich Avenue All Rights Reserved</p>
           </div>
        </footer>
     );
}
 
export default Footer;