import React from "react";
import styles from "./Footer.module.scss";
import { logo } from "../../assets";
import Image from "next/image";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h3 className={styles.copyRight}>Full Plate Fitness &copy;</h3>
      </div>

      <div className={styles.socialMedia}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
