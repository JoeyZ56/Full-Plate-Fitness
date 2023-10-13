import React from "react";
import styles from "./Testimonials.module.scss";

const reviews = [
  {
    id: 1,
    name: "Joey Zazzi",
    desc: "Jen is a very dedicated and knowledgeable trainer. She is always willing to help and answer any questions you may have. She is very passionate about what she does and it shows in her work. I would highly recommend her to anyone looking for a trainer.",
    img: "https://i.imgur.com/GU7O8ql.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className={styles.container} id="testimonials">
      <div className={styles.reviews}>
        <div className={styles.name}>
          {reviews.map((review) => (
            <div key={review.id}>
              <h2>{review.name}</h2>
              <img src={review.img} alt="review" />
              <p>{review.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
