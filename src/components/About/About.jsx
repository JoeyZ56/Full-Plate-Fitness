"use client";
import React from "react";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.contianer} id="about">
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className={styles.logo}
      >
        <img
          src="https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/369788167_10217994698418307_6792014141361599766_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HJ-tWr_YJS8AX-CB0Ub&_nc_ht=scontent.fsac1-1.fna&oh=00_AfAi42rOZ4gXFawaBE2sVoPMKb6E93VAcgnF4QRK7pFE7g&oe=65364222"
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
          dissatisfaction with my health. A decade of on-and-off gym visits had
          left me overweight and unhappy. Enter CrossFit—an initial love affair
          with heavy weights that, while invigorating, wasn't sustainable for
          me. Shifting to dedicated strength training five years ago proved
          transformative. Beyond physical changes, this journey ignited mental
          clarity and better nutritional choices. Recognizing the impact on
          anxiety and depression, I felt a calling to help others. Through
          education, my passion is guiding you to embrace the process, making
          fitness a sustainable joy. Whether it's strength, a healthier
          lifestyle, intuitive eating, or everyday feats, I'm here to support
          your well-being journey.
          <br />
          <b>Let's make your goals a reality—together.</b>
        </p>
      </div>
    </div>
  );
};

export default About;
