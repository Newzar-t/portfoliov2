import "./styles/App.css";
import "./styles/MainPage.css";
import MovingCross from "./components/MovingCross";
import Button from "./components/Button";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { SplitText } from "gsap/all";

function MainPage() {
  const titleRef = useRef(null);

  useEffect(() => {
    let split = SplitText.create(".welcome-bloc h1", {type: "words"});

    gsap.from(split.words, {
      duration: 1,
      y: -100,
      autoAlpha: 0, 
      stagger: 0.1,
    });
    
  })

  return (
    <>
      <section id="home" className="main-page-section welcome-section">
        <MovingCross
          index="violet-cross-1"
          color="./public/images/VioletCross.svg"
        />
        <MovingCross
          index="violet-cross-2"
          color="./public/images/YellowCross.svg"
        />
        <div className="welcome-bloc">
          <h1 ref={titleRef}>
            Bienvenue sur mon<br></br>
            <span id="portfolio-title">PORTFOLIO❗</span>
          </h1>

          <Button
            classType="button-type button-type-1"
            path="#"
            text=" Projets"
          />
          <Button
            classType="button-type button-type-2"
            path="#"
            text=" À propos"
          />
          <Button
            classType="button-type button-type-3"
            path="#"
            text=" Contact"
          />
        </div>
      </section>
    </>
  );
}

export default MainPage;
