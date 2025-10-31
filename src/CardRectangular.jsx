import './styles/App.css'
import gsap from 'gsap'

function CardRectangular ( color, content){

    
    return(
        <div className={color}>
            {content}
        </div>
    )
}

export default CardRectangular;