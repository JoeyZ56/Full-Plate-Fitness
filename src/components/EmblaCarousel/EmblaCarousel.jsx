"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./EmblaCarousel.module.scss";
import Image from "next/image";
import { logo } from "../../assets";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.carouselContainer}>
      <Image src={logo} className={styles.headerImg} />
      <h1 className={styles.carouselHeading}>Full Plate Fitness</h1>
      <h2 className={styles.carouselSubheading}>Personal Training</h2>
      <h3 className={styles.carouselSubheading2}>
        Transforming Lives <br />
        <span>One Rep at a Time</span>
      </h3>

      <div className={styles.embla} ref={emblaRef} id="embla">
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <img src="http://cassstudios.com/wp-content/uploads/2014/11/woman_lifting_weights_detail_backmuscles.jpg" />
          </div>
          <div className={styles.embla__slide}>
            <img src="https://wallpapercave.com/wp/wp7661163.jpg" />
          </div>
          <div className={styles.embla__slide}>
            <img src="https://wallpapercave.com/wp/wp8487292.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
