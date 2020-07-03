import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./Slider.module.css";

function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      heading: "heading1",
      body: "body1",
      backgroundImageUrl: "https://source.unsplash.com/RyRpq9SUwAU/1600x900"
    },
    {
      heading: "heading2",
      body: "body2",
      backgroundImageUrl: "https://source.unsplash.com/BeOW_PJjA0w/1600x900"
    },
    {
      heading: "heading3",
      body: "body3",
      backgroundImageUrl: "https://source.unsplash.com/TMOeGZw9NY4/1600x900"
    },
    {
      heading: "heading4",
      body: "body4",
      backgroundImageUrl: "https://source.unsplash.com/yXpA_eCbtzI/1600x900"
    },
    {
      heading: "heading5",
      body: "body5",
      backgroundImageUrl: "https://source.unsplash.com/ULmaQh9Gvbg/1600x900"
    }
  ];

  return (
    <div>
      <div className={styles.slider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeSlideIndex
                ? `${styles.slide} ${styles.current}`
                : `${styles.slide}`
            }
            style={{ backgroundImage: `url(${slide.backgroundImageUrl})` }}
          >
            <div className={styles.content}>
              <h1>{slide.heading}</h1>
              <p>{slide.body}</p>
              <p>{index}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttoncontainer}>
        <div className={styles.buttons}>
          <button
            id="prev"
            onClick={() =>
              setActiveSlideIndex(
                prevActiveSlideIndex =>
                  (slides.length + prevActiveSlideIndex - 1) % slides.length
              )
            }
          >
            <i className={`${styles.arrow} ${styles.left}`}></i>
          </button>
          <button
            id="next"
            onClick={() =>
              setActiveSlideIndex(
                prevActiveSlideIndex =>
                  (prevActiveSlideIndex + 1) % slides.length
              )
            }
          >
            <i className={`${styles.arrow} ${styles.right}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

// Slider.propTypes = {
//     slides: PropTypes.array.isRequired
// }

export default Slider;
