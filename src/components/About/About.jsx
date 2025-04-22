"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { JensPic } from "../../assets";
import { Box, Typography, Paper, Container } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "rgb(96, 37, 37);", py: 6 }} id="about">
      <Container sx={{ textAlign: "center" }}>
        {/* Motion Image */}
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: "tween" }}
          style={{ marginBottom: "2rem" }}
        >
          <Box
            sx={{
              width: { xs: 200, sm: 300, md: 400 },
              height: "auto",
              mx: "auto",
            }}
          >
            <Image
              src={JensPic}
              alt="Jennifer's photo"
              width={400}
              height={400}
              style={{
                borderRadius: "50%",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </motion.div>

        {/* Heading */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 3,
            color: "#fff",
            fontSize: { xs: "1.75rem", sm: "2.5rem" },
          }}
        >
          Experienced Fitness Professional
        </Typography>

        {/* Bio Section */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4 },
            textAlign: "left",
            color: "#fff",
            backgroundColor: "#333",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Hi 👋
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            My name is Jennifer, and I am a Certified Personal Trainer and
            Nutrition Coach.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            <strong>My Fitness Journey:</strong>
            <br />
            From struggle to strength. In 2018, my fitness journey began, fueled
            by dissatisfaction with my health. A decade of on-and-off gym visits
            had left me overweight and unhappy. Enter CrossFit — an initial love
            affair with heavy weights that, while invigorating, wasn’t
            sustainable for me.
            <br />
            <br />
            Shifting to dedicated strength training five years ago proved
            transformative. Beyond physical changes, this journey brought mental
            clarity and better nutritional choices. Recognizing its impact on
            anxiety and depression, I felt called to help others.
            <br />
            <br />
            Now, through education and coaching, I’m passionate about guiding
            others to embrace the process and discover joy in the journey.
            Whether it’s building strength, living healthier, intuitive eating,
            or conquering everyday feats.
            <br />
            <strong>Let’s make your goals a reality together!</strong>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
