
const NavLinks = (props) => {
    const showMusic = props.showMusic;
    const showVideos = props.showVideos;
    const showStory=props.showStory;
    return (
        <div className={"side-bar"}>
            <ul>
                <li>
                    <button className={"nav-link side-way-link"}
                        onClick={
                            ()=>{
                                showStory();
                            }
                        }
                    >
                    Story
                    </button>
                </li>
                <li>
                    <button className={"nav-link side-way-link"}
                        onClick={
                            ()=>{
                                showVideos();
                            }
                        }
                    
                    >Videos</button>
                </li>
                <li>
                    <button className={"nav-link side-way-link"}
                        onClick={
                            ()=>{
                                showMusic();
                            }
                        }
                    
                    >Music</button>
                </li>
            </ul>
        </div>
      );
}
 
export default NavLinks;