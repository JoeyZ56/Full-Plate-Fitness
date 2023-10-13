// components/Navbar.js
import Link from "next/link";
import styles from "./Navbar.module.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="#embla">Full Plate Fitness</Link>
      <Link href="#about">About</Link>
      <Link href="#skills">Skills</Link>
      <Link href="#testimonials">Testimonials</Link>
      <Link href="#contact">Contact</Link>
      <SocialMedia />
    </nav>
  );
};

export default Navbar;
