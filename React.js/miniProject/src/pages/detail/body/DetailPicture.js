import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./style/DetailPicture.module.css";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";

const DetailPicture = () => {
  const images = useRef([
    {
      src: pic1,
    },
    {
      src: pic2,
    },
    {
      src: pic3,
    },
  ]);

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
    <div className={styles.container}>
      <div className={styles.slide}>
        <div
          className={styles.btn}
          onClick={() => {
            moveSlide(-1);
          }}
        >
          &lt;
        </div>
        <div className={styles.window}>
          <div className={styles.flexbox} style={style}>
            {images.current.map((img, i) => (
              <div
                key={i}
                className={styles.img}
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
            ))}
          </div>
        </div>
        <div
          className={styles.btn}
          onClick={() => {
            moveSlide(1);
          }}
        >
          &gt;
        </div>
      </div>
      <div className={styles.position}>
        {images.current.map((x, i) => (
          <div
            key={i}
            className={
              i === current
                ? [styles.dot, styles.current].join(" ")
                : [styles.dot].join(" ")
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DetailPicture;
