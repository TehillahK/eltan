
const NavLinks = (props) => {
    const showMusic = props.showMusic;
    return (
        <div className={"side-bar"}>
            <ul>
                <li>
                    <button className={"nav-link side-way-link"}
                    >
                    Story
                    </button>
                </li>
                <li>
                    <button className={"nav-link side-way-link"}>Videos</button>
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