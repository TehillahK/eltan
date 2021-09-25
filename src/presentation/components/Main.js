import PropTypes from 'prop-types'
import MusicSlider from './MusicSlider';

function Header(props){
    const reset =props.reset;
    return(
        <div className={"flex flex-column"}>
            <button className={"title"}
                    onClick={
                        ()=>{
                                reset()
                        }
                    }
                >EL-TAN</button>
        </div>
    )
}
const Main = (props) => {
    const showMusic = props.showMusic;
    const reset=props.reset;
    return (
        <main className={"grid two-rols main center"}>
            <Header />
            <div>
                {
                   showMusic && (
                       <MusicSlider />
                   )
                }
            </div>
        </main>
     );
}
 
Main.propTypes={
    showMusic: PropTypes.bool
}
export default Main;