import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF ,faTwitter ,faInstagram , faSpotify, faApple, faSoundcloud,faDeezer  } from '@fortawesome/free-brands-svg-icons';

function openLink(link){
    window.open(link)
}
const Socials = () => {
    const facebookLink="https://www.facebook.com/3ltan/?ref=py_c";
    const twitterLink="https://twitter.com/MbuwemiN";
    const instagramLink="https://www.instagram.com/3ltan/";
    const spotifyLink="https://open.spotify.com/artist/6xybSqEXa6jKTgknzvmxhM";
    const appleLink="https://music.apple.com/artist/el-tan/1440661116";
    const deezerLink="https://www.deezer.com/en/artist/53423832?autoplay=true";
    return ( 
        <div className={"side-bar"}>
            <ul>
                <li>
                    <button href="#" className={"nav-link"}
                            onClick={
                                ()=>{
                                    openLink(facebookLink)
                                }
                            }
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </button>
                </li>
                <li>
                    <button href="#" className={"nav-link"}
                            onClick={
                                ()=>{
                                    openLink(twitterLink)
                                }
                            }
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </li>
                <li>
                    <button href="#" className={"nav-link"}
                            onClick={
                                ()=>{
                                    openLink(instagramLink)
                                }
                            }
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                </li>
                <li>
                    <button href="#" className={"nav-link"}
                            onClick={
                                ()=>{
                                    openLink(spotifyLink)
                                }
                            }
                    >
                        <FontAwesomeIcon icon={faSpotify} />
                    </button>
                </li>
                <li>
                    <button href="#" className={"nav-link"}
                             onClick={
                                ()=>{
                                    openLink(appleLink)
                                }
                            }
                    >
                        <FontAwesomeIcon icon={faApple} />
                    </button>
                </li>
                <li>
                    <button href="#" className={"nav-link"}
                            onClick={
                                ()=>{
                                    openLink(deezerLink)
                                }
                            }
                    >
                        <FontAwesomeIcon icon={faDeezer} />
                    </button>
                </li>
            </ul>
        </div>
     );
}
 
export default Socials;