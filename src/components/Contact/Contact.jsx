import React from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div>
        <h2 className={styles.title}>
          <span>For personalized fitness guidance tailored to your goals</span>
          <br /> please feel free to reach out
        </h2>
        <div className={styles.infoContainer}>
          <Link href="mailto:jennifermccurdy@gmail.com" className={styles.text}>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className={styles.info}
            >
              <img
                src="https://i.imgur.com/vumkygf.png"
                alt="email"
                className={styles.icons}
              />
              {/* //"mailto" is a specail property that takes you to a link to email the person */}
              <p>jennifermccurdy@gmail.com</p>
            </motion.div>
          </Link>
          <Link href="tel: +1 (530) 514-2339" className={styles.text}>
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className={styles.info}
            >
              <img
                src="https://i.imgur.com/AH73oGY.png"
                alt="mobile"
                className={styles.icons}
              />
              {/* //"tel:" */}
              <>+1 (530) 514-2339</>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
