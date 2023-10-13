"use client";
import styles from "./page.module.scss";
import About from "@/components/About/About";
import { EmblaCarousel } from "@/components/EmblaCarousel/EmblaCarousel";
import { Element } from "react-scroll";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Element name="embla">
        <EmblaCarousel />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="testimonials">
        <Testimonials />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}
