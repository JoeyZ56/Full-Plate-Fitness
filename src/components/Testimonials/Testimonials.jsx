"use client";
import React from "react";
import styles from "./Testimonials.module.scss";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Joey Zazzi",
    desc: "Jennifer exemplifies unwavering dedication and expertise in her role as a fitness trainer. Her commitment to assisting and addressing inquiries underscores her profound knowledge. Demonstrating an evident passion for her craft, Jennifer's work speaks volumes. I wholeheartedly endorse her services to individuals seeking a highly qualified and dedicated trainer.",
    img: "https://i.imgur.com/GU7O8ql.jpg",
  },
  {
    id: 2,
    name: "Sarah Wood",
    desc: "Before Jenny I had very little knowledge on how food and a healthy lifestyle should look alongside the exercising that I was doing.  I had been so influenced by diet culture for so many years that by the time I found Jenny I was exhausted, I wasn’t feeding my body anywhere close to as much as I should have and my metabolism was shot. Jenny has given me so much helpful guidance since day one.  My relationship with my body and how I care for it has improved so much thanks to her!  She’s also been very reassuring during the whole process and very easy to talk to about anything that has come up. I hope to continue to have Jenny as my health and lifestyle coach and would recommend her to anyone who seeks guidance to a healthier lifestyle!",
  },
  {
    id: 3,
    name: "April june",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://tse4.mm.bing.net/th?id=OIP.oa7lMha0uXH9GglNX1cKdAHaFq&pid=Api&P=0&h=220",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    if (index < 0) {
      setCurrentIndex(reviews.length - 1);
    } else if (index > reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const review = reviews[currentIndex];

  return (
    <>
      <h1 className={styles.reviewsTitle}>Client Reviews</h1>
      <div className={styles.container} id="reviews">
        {review && (
          <>
            <motion.div
              className={styles.left}
              onClick={() => handleClick(currentIndex - 1)}
              whileHover={{ scale: 1.1 }}
            >
              <HiChevronLeft />
            </motion.div>

            <div className={styles.info}>
              {review.img && <img src={review.img} alt="image" />}
              <div className={styles.review}>
                <p>{review.desc}</p>
              </div>
              <h4>{review.name}</h4>
            </div>

            <motion.div
              className={styles.right}
              onClick={() => handleClick(currentIndex + 1)}
              whileHover={{ scale: 1.1 }}
            >
              <HiChevronRight />
            </motion.div>
          </>
        )}
      </div>
    </>
  );
};

export default Testimonials;
