import './styles/App.css'
import './styles/MainPage.css'
import MovingCross from './components/MovingCross'
/* import gsap from 'gsap' */

function MainPage(){

    


    return(
        
        <>
        <section id="home" className="main-page-section welcome-section"><MovingCross index="1" color="./public/images/VioletCross.svg" />
        <h1 className="main-title" >Hello  world</h1></section>
        </>
    )
}

export default MainPage;