import { FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedia.module.scss";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className={styles.socailMedia}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <a
          href="https://www.facebook.com/jennifer.mccurdy.980"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        {/* <a
          href="http://www.linkedin.com/in/joseph-zazzi-8bab68a1"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a> */}
      </motion.div>
    </div>
  );
};

export default SocialMedia;
