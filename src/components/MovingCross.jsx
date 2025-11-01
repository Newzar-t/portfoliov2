import gsap from "gsap";
import { useEffect, useRef } from "react";

function MovingCross({ color, index }) {
  const crossRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".moving-cross",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      )
      .fromTo(
        ".moving-cross",
        {
          rotation: 0,
        },
        { rotation: 360, duration: 6, repeat: -1, ease: "linear" },
        0
      )
      .timeScale(1);
  });

  return <img data-index={index} ref={crossRef} className="moving-cross" src={color} />;
}

export default MovingCross;
