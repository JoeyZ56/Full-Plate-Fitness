"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./EmblaCarousel.module.scss";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef} id="embla">
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <img src="https://generalhealthmagazine.files.wordpress.com/2019/11/dumbbell-press-bench-man-workout-1109-e1572890942637.jpg" />
        </div>
        <div className={styles.embla__slide}>
          <img src="https://generalhealthmagazine.files.wordpress.com/2019/11/dumbbell-press-bench-man-workout-1109-e1572890942637.jpg" />
        </div>
        <div className={styles.embla__slide}>
          <img src="https://generalhealthmagazine.files.wordpress.com/2019/11/dumbbell-press-bench-man-workout-1109-e1572890942637.jpg" />
        </div>
      </div>
    </div>
  );
};
