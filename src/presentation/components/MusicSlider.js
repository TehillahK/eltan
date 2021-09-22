
function MusicAlbum(props){
    return(
        <div className={"flex flex-column"}>
            <img src={''} />
            <h3>Album title</h3>
            <button>GET IT NOW</button>
        </div>
    )
}
const MusicSlider = () => {
    return ( 
        <section>
            <MusicAlbum />
        </section>
     );
}
 
export default MusicSlider;