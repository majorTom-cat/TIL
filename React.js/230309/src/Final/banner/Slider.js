import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Slider.css";
import pic1 from "./images/main_banner1.png";
import pic2 from "./images/main_banner1.png";
const Slider = () => {
  const images = useRef([{ src: pic1 }, { src: pic2 }]);

  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({
    marginLeft: `-${current}00%`,
  });
  const imgSize = useRef(images.current.length);

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  return (
    <div className="container">
      <div className="slide">
        <div
          className="btn_left"
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </div>
        <div className="window">
          <div className="flexbox" style={style}>
            {images.current.map((img, i) => (
              <div
                key={i}
                className="img"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
            ))}
          </div>
        </div>
        <div
          className="btn_right"
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </div>
      </div>
      <div className="position">
        {images.current.map((x, i) => (
          <div key={i} className={i === current ? "dot current" : "dot"}></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
