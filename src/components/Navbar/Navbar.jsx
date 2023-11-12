// components/Navbar.js
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <motion.div whileHover={{ scale: 1.1 }} className={styles.embla}>
        <Link href="#embla">Full Plate Fitness</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href="#about">About</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href="#skills">Skills</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href="#reviews">Reviews</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href="#contact">Contact</Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
