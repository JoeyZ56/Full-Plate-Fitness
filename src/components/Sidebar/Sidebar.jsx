import React from "react";
import styles from "./Sidebar.module.scss";
import { slide as Menu } from "react-burger-menu";
import { motion } from "framer-motion";
import Link from "next/link";

export default (props) => {
  return (
    <Menu className={styles.menuContainer}>
      <motion.div whileHover={{ scale: 1.1 }}>
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
    </Menu>
  );
};
