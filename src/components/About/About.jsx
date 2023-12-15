"use client";
import React from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { jensPhoto } from "../../assets";

const About = () => {
  return (
    <div className={styles.contianer} id="about">
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={styles.logo}
      >
        <Image
          src={jensPhoto}
          alt="Jennifer's photo"
          width={400}
          height={400}
          className={styles.profileImg}
        />
      </motion.div>
      <h1 className={styles.aboutTitle}>Experienced Fitness Professional</h1>
      <div className={styles.about}>
        <h2>Hi</h2>
        <h3>
          My name is Jennifer and I am a Certified Personal Trainer and
          Nutrition Coach.
        </h3>
        <p>
          <b>My Fitness Journey:</b>
          <br />
          From Struggle to Strength In 2018, my fitness journey began, fueled by
          dissatisfaction with my health. A decade of on and off gym visits had
          left me overweight and unhappy. Enter CrossFit, an initial love affair
          with heavy weights that, while invigorating, wasn&apos;t sustainable
          for me. Shifting to dedicated strength training five years ago proved
          transformative. Beyond physical changes, this journey ignited mental
          clarity and better nutritional choices. Recognizing the impact on
          anxiety and depression, I felt a calling to help others. Through
          education, my passion is guiding you to embrace the process, making
          fitness a sustainable joy. Whether it&apos;s strength, a healthier
          lifestyle, intuitive eating, or everyday feats, I&apos;m here to
          support your well-being journey.
          <br />
          <b>Let&apos;s make your goals a reality together!</b>
        </p>
      </div>
    </div>
  );
};

export default About;
