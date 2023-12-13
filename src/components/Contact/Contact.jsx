import React from "react";
import styles from "./Contact.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { phone, email } from "../../assets";

import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.contactText}>
        <h2 className={styles.title}>
          <span>
            For personalized fitness guidance tailored to your goals please feel
            free to reach out!
          </span>
        </h2>
      </div>
      <div className={styles.infoContainer}>
        <Link href="mailto:jennifermccurdy@gmail.com" className={styles.text}>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.info}
          >
            <Image src={email} alt="email" className={styles.icons} />
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
            <Image src={phone} alt="mobile" className={styles.icons} />
            {/* //"tel:" */}
            <p>+1 (530) 514-2339</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
