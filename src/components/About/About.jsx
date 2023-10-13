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
        <img src="http://lh3.googleusercontent.com/rj_OuzLeGst1kdD-jtcx9wrCQ3LCfeeYvtUR8j7XrdxL5jL7ukJG4EVdyzkUxHAoPmA=w128" />
      </motion.div>
      <div className={styles.about}>
        <h2>Hi</h2>
        <h3>
          My name is Jennifer and I am a Certified Personal Trainer and
          Nutrition Coach.
        </h3>
        <p>
          I began my love for fitness back in 2018. Before then, I had been in
          and out of the gym for 10+ years but in no way did I resemble
          “healthy”. I was overweight, sad, and not happy with the way my life
          was going. So I made a change and I began crossfit. It was then that I
          fell in love with lifting heavy weights. The journey was great and I
          felt so good but I knew that it wouldn’t be sustainable for me, so I
          moved away from Crossfit and began my strength training in earnest. It
          has been 5 years now and I know it was the right choice for me. I
          began to feel better, make better choices when it came to nutrition,
          stopped eating out as much, and really saw the changes in my body and
          my mind. The mental clarity that training provided me was, and has
          been, very rewarding. The physical changes to my body were just an
          added bonus. Once I understood how much training helped my anxiety and
          depression, and how good my body felt, I realized that I wanted to
          help others feel the same way. My education has made that possible. My
          passion is to be able to help you reach your goal, while learning to
          enjoy the journey along the way. Taking care of ourselves can be hard
          and can come with obstacles, but with my guidance I am here to teach
          you to enjoy the process and make it something you will be able and
          willing to continue throughout your life. Whether you are looking to
          get stronger, have a healthier lifestyle, make better food choices
          without thinking, or just want to be able to grab that soup can off
          the top shelf without cringing, I am here for you!
        </p>
      </div>
    </div>
  );
};

export default About;
