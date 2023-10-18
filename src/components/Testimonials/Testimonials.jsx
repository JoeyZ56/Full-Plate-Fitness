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
    desc: "Jen is a very dedicated and knowledgeable trainer. She is always willing to help and answer any questions you may have. She is very passionate about what she does and it shows in her work. I would highly recommend her to anyone looking for a trainer.",
    img: "https://i.imgur.com/GU7O8ql.jpg",
  },
  {
    id: 2,
    name: "Bobby Nicks",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    img: "https://images.creativemarket.com/0.1.0/ps/1895597/1360/2166/m1/fpnw/wm1/wvgshco03n8e1avxqhpzuuxcukykfue1jlfdmgda5vxwatqgxe5ircqstmn7cv25-.jpg?1479174239&s=09b85f2cd288ebac54ced98a5083ed53",
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
              <img src={review.img} alt="image" />
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
