import React from "react";
import { useEffect, useState } from "react";
import { AppLogo } from "../../components/Logos/AppLogo/AppLogo";
import { Navigation } from "../../components/Navigation/Navigation";
import { BuyButton } from "../../components/BuyButton/BuyButton";
import { OpenMenuButton } from "../../components/ModalMenu/OpenMenuButton/OpenMenuButton";
import { Menu } from "../../components/ModalMenu/Menu/Menu";
import { PlatformsBlock } from "../../components/HeroPlatformsBlock/PlatformsBlock";
import { HeroTitleBlock } from "../../components/HeroTitleBlock/HeroTitleBlock";
import { HeroImg } from "../../components/HeroImg/HeroImg";
import { Stripe } from "../../components/Stripe/Stripe";
import { Slider } from "../../components/Slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../components/basicStyles.module.css";
import girl from "../../assets/girl.png";
/**

React functional component for the main page of the website.
It displays the navigation bar, a hero section with an image and a title, a slider and a menu that opens on click of the menu button.
@returns The JSX for the main page.
*/
export const MainPage = () => {
  // State for the modal menu
  const [modal, setModal] = useState(false);
  // State for the image in the hero section
  const [image] = useState(girl);

  /**

Toggles the modal menu open and closed.
Also sets the overflow of the body to hidden when the modal is open to prevent scrolling.
*/
  function toggleModal() {
    setModal(!modal);
    !modal
      ? (document.querySelector("body")!.style.overflow = "hidden")
      : (document.querySelector("body")!.style.overflow = "visible");
  }
  // Initialise the AOS animation library with default settings once the component mounts.
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  });

  return (
    <>
      {/* Navigation bar */}
      <header className={styles.header}>
        <div className={styles.container}>
          <AppLogo />
          <Navigation />
          <BuyButton />
          <OpenMenuButton openModal={toggleModal} />
          {modal && <Menu closeModal={toggleModal} />}
        </div>
      </header>
      <main>
        <section className={styles.hero} data-aos="fade-down">
          <div className={styles.container}>
            <div className={styles.heroDescription}>
              <PlatformsBlock />
              <HeroTitleBlock />
            </div>
            <HeroImg image={image} isImageClicked={false} />
            <Stripe />
          </div>
        </section>
        <Slider />
      </main>
    </>
  );
};
