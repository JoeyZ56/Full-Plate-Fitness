import { FaFacebook, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedia.module.scss";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className={styles.socailMedia}>
      <div>
        <a
          href="https://www.facebook.com/jennifer.mccurdy.980"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className={styles.soc_title}>Find Me On FaceBook!</h3>
          <div className={styles.facebook_icon}>
            <FaFacebook />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
