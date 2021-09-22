
const NavLinks = (props) => {
    const showMusic = props.showMusic;
    return (
        <div className={"side-bar"}>
            <ul>
                <li>
                    <button className={"nav-link side-way-link"}>
                        Music
                    </button>
                </li>
                <li>
                    <button className={"nav-link side-way-link"}>Music</button>
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