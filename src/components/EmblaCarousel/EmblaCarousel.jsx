"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./EmblaCarousel.module.scss";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.carouselContainer}>
      <img
        src="http://lh3.googleusercontent.com/rj_OuzLeGst1kdD-jtcx9wrCQ3LCfeeYvtUR8j7XrdxL5jL7ukJG4EVdyzkUxHAoPmA=w128"
        className={styles.headerImg}
      />
      <h1 className={styles.carouselHeading}>Full Plate Fitness</h1>
      <h2 className={styles.carouselSubheading}>Personal Training</h2>
      <h3 className={styles.carouselSubheading2}>
        Transforming Lives, One Rep at a Time
      </h3>

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
    </div>
  );
};
