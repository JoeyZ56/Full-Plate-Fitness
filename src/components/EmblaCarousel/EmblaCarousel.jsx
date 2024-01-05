"use client";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./EmblaCarousel.module.scss";
import Image from "next/image";
import { logo, slide1, slide2, slide3 } from "../../assets";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaRef) {
      Autoplay(emblaRef);
    }
  }, [emblaRef]);

  return (
    <div className={styles.carouselContainer}>
      <Image src={logo} className={styles.headerImg} alt="logo" />
      {/* <h1 className={styles.carouselHeading}>Full Plate Fitness</h1> */}
      <h2 className={styles.carouselSubheading}>Personal Training</h2>
      <h3 className={styles.carouselSubheading2}>
        <i>
          Transforming Lives <br />
          One Rep at a Time
        </i>
      </h3>

      <div className={styles.embla} ref={emblaRef} id="embla">
        <div className={styles.embla__container}>
          <div className={styles.embla__slide}>
            <Image src={slide1} alt="slide1" className={styles.img} />
          </div>
          <div className={styles.embla__slide}>
            <Image src={slide2} alt="slide2" className={styles.img} />
          </div>
          <div className={styles.embla__slide}>
            <Image src={slide3} alt="slide3" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};
