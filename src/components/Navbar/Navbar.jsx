// components/Navbar.js
// import Link from "next/link";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={styles.navbar}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        onClick={scrollToTop}
        className={styles.embla}
        style={{ cursor: "pointer" }}
      >
        Full Plate Fitness
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <ScrollLink to="reviews" smooth={true} duration={500}>
          Reviews
        </ScrollLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </motion.div>
    </nav>
  );
};

export default Navbar;
