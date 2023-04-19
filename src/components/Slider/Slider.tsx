import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import Sweater from "../../assets/hoodie-desk-1x.jpg";
import Mountain from "../../assets/mountain-desk-1x.jpg";
import Woman from "../../assets/girl-desk-1x.jpg";
import Shoes from "../../assets/shoes-desk-1x.jpg";
import Leg from "../../assets/foot-desk-1x.jpg";
import Carousel, { CarouselProps } from "nuka-carousel";
import "./Slider.css";
import styles from "../basicStyles.module.css";
import { Fade } from "react-awesome-reveal";

/**
 * Component for a slider that displays images in a carousel.
 *
 * @returns JSX element
 */
export function Slider(): JSX.Element {
  const [slides, setSlides] = useState<number>(() => slidesAmount());

  useEffect(() => {
    const prevBtn = document.querySelector(
      ".slider-control-centerleft > button"
    );
    const nextBtn = document.querySelector(
      ".slider-control-centerright > button"
    );
    if (prevBtn && nextBtn) {
      prevBtn.textContent = "";
      nextBtn.textContent = "";
    }

    function handleResize() {
      setSlides(slidesAmount());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Determines the number of slides to show based on the window width.
   *
   * @returns number of slides
   */
  function slidesAmount(): number {
    if (window.innerWidth < 768) {
      return 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      return 3;
    } else {
      return 4;
    }
  }

  const carouselProps: CarouselProps = {
    slidesToShow: slides,
    cellSpacing: 50,
    wrapAround: true,
    disableEdgeSwiping: true,
    renderBottomCenterControls: null,
  };

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <Fade direction="down" triggerOnce={true}>
          <Title>Choose looks</Title>
        </Fade>
        <Carousel {...carouselProps}>
          <img
            src={Sweater}
            width={239}
            height={304}
            alt="Sweater"
            className="slider-img"
          />
          <img
            src={Mountain}
            width={239}
            height={304}
            alt="Mountain"
            className="slider-img"
          />
          <img
            src={Woman}
            width={239}
            height={304}
            alt="Woman"
            className="slider-img"
          />
          <img
            src={Shoes}
            width={239}
            height={304}
            alt="Shoes"
            className="slider-img"
          />
          <img
            src={Leg}
            width={239}
            height={304}
            alt="Leg"
            className="slider-img"
          />
        </Carousel>
        <Fade direction="down" triggerOnce={true}>
          <Title>More about us</Title>
        </Fade>
        <div className="sliderText">
          <Fade direction="left" triggerOnce={true}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
              enim sed libero commodo efficitur. Suspendisse et lorem ac neque
              dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut
              pretium. Vivamus ornare mauris non ligula egestas, accumsan
              faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam
              non rhoncus felis, porttitor consequat quam. Morbi gravida semper
              mattis. Nunc ultrices justo in pulvinar convallis. Curabitur
              dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac
              finibus ipsum.
            </p>
          </Fade>
          <br />
          <Fade direction="left" delay={200} triggerOnce={true}>
            <p>
              Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam
              pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu,
              eleifend vestibulum tortor. Duis facilisis, est et aliquam
              dapibus, urna mauris sagittis mi, et mattis metus magna vel
              tellus. Phasellus sit amet volutpat ante, ut condimentum lorem.
              Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et.
              Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus,
              feugiat velit. Curabitur ac accumsan velit. In hac habitasse
              platea dictumst.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
