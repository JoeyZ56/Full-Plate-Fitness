import { useState } from "react";
import styles from "./Navbar.module.scss";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggleMenu = () => {
    SetIsOpen((open) => !open);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav-header">
      <ul className="nav-header__container">
        <Image
          src={Logo}
          alt="logo"
          width={50}
          height={50}
          className="nav-logo"
        />
        <li
          onClick={scrollToTop}
          style={{ listStyle: "none" }}
          className="nav-title"
        >
          Fullplate Fitness
        </li>
        <li className="nav-header__trigger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </li>
        <li
          className={`nav-header_menuItems ${isOpen ? "is-open" : ""}`}
          style={{ listStyle: "none" }}
        >
          <ul>
            <li style={{ listStyle: "none" }} className="nav-list_container">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={150}
                onClick={toggleMenu}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Training
              </ScrollLink>
              <ScrollLink
                to="reviews"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Reviews
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
