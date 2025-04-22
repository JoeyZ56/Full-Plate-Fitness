"use client";
import About from "@/components/About/About";
import { EmblaCarousel } from "@/components/EmblaCarousel/EmblaCarousel";
import { Element } from "react-scroll";
import Skills from "@/components/Skills/Skills";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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

      <Footer />
    </Box>
  );
}
