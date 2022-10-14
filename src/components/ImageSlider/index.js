// import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// const ImageSlider = () => {
//   const slideImages = [
//     {
//       url: "./images/sliderImg1.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg2.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg3.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg4.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg5.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg6.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg7.png",
//       caption: "Perfume Tips Tricks",
//     },
//     {
//       url: "./images/sliderImg8.png",
//       caption: "Perfume Tips Tricks",
//     },
//   ];
//   return (
//     <div className="slide-container">
//       <Slide>
//         {slideImages.map((slideImage, index) => (
//           <div className="each-slide" key={index}>
//             <div style={{ backgroundImage: `url(${slideImage.url})` }}>
//               <span>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// };

// export default ImageSlider;

import { useState } from "react";
import styles from "./style.module.css";
import SliderArrow from "./SliderArrow";

const ImageSlider = ({ slides }) => {
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className={styles.sliderStyles}>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrowStyles}>
          {/* ❰ */}
          <div className={styles.LeftArrowSlider}>
            <SliderArrow />
          </div>
        </div>
        <div onClick={goToNext} className={styles.rightArrowStyles}>
          {/* ❱ */}
          <div className={styles.RightArrowSlider}>
            <SliderArrow />
          </div>
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className={styles.dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>

      <div className={styles.DescriptionContainer}>
        <div className={styles.Description}>
          <p>Perfume Tips Tricks</p>
          <a href="#" id={styles.shopNowBtn}>
            shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
