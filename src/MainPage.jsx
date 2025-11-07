import "./styles/App.css";
import "./styles/MainPage.css";
import MovingCrossViolet from "./components/MovingCrossViolet";
import MovingCrossYellow from "./components/MovingCrossYellow";
import Button from "./components/Button";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { SplitText } from "gsap/all";

function MainPage() {
  const titleRef = useRef(null);

  const spanRef = useRef(null);

  useEffect(() => {
    let split = SplitText.create("#welcome-bloc-text", { type: "words" });

    gsap.from(split.words, {
      duration: 0.4,
      y: -30,
      autoAlpha: 0,
      stagger: 0.3,
    });

   
  });

useEffect(() => {
  const split = SplitText.create("#portfolio-title", { type: "chars" });
  const characters = split.chars;

  gsap.from(characters, {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.05,
    ease: "power2.out",
  });

  const wave = { t: 0 }; 

  gsap.to(wave, {
    t: "+=1", 
    duration: 2, 
    ease: "none", 
    repeat: -1, 
    onUpdate: () => {
      characters.forEach((char, i) => {
        const y = Math.sin(wave.t * Math.PI * 2 + i * 0.4) * 15;
        gsap.set(char, { y });
      });
    },
  });
}, []);


  return (
    <>
      <section id="home" className="main-page-section welcome-section">
        <MovingCrossViolet
          index="violet-cross-1"
          color="./public/images/VioletCross.svg"
        />
        <MovingCrossYellow
          index="yellow-cross-1"
          color="./public/images/YellowCross.svg"
        />
        <div className="welcome-bloc">
          <div className="welcome-bloc-left">
            <h1 id="welcome-bloc-text" ref={titleRef}>
              Bienvenue sur mon
            </h1>
            <h1>
              <span ref={spanRef} id="portfolio-title">
                PORTFOLIO
              </span>
            </h1>

            <span className="button-bloc">
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
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
