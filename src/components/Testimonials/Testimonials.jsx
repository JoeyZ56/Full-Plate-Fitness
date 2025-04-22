"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Box, Typography, IconButton, Card, CardContent } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const reviews = [
  {
    id: 1,
    name: "Sarah Wood",
    desc: "Before Jenny I had very little knowledge on how food and a healthy lifestyle should look alongside the exercising that I was doing.  I had been so influenced by diet culture for so many years that by the time I found Jenny I was exhausted, I wasn’t feeding my body anywhere close to as much as I should have and my metabolism was shot. Jenny has given me so much helpful guidance since day one.  My relationship with my body and how I care for it has improved so much thanks to her!  She’s also been very reassuring during the whole process and very easy to talk to about anything that has come up. I hope to continue to have Jenny as my health and lifestyle coach and would recommend her to anyone who seeks guidance to a healthier lifestyle!",
  },
  {
    id: 2,
    name: "Joey Zazzi",
    desc: "Jennifer exemplifies unwavering dedication and expertise in her role as a fitness trainer. Her commitment to assisting and addressing inquiries underscores her profound knowledge. Demonstrating an evident passion for her craft, Jennifer's work speaks volumes. I wholeheartedly endorse her services to individuals seeking a highly qualified and dedicated trainer.",
  },
  {
    id: 3,
    name: "Martina Garcia",
    desc: "I must say I was a little bit nervous to start my journey but I am glad I did. My goal was to gain muscle and tone my body. She has taught me to be more confident in lifting weights and doing everything on my own. If it wasn’t for her I would not be doing it still. She is amazing and a great trainer. I have now been lifting for 9 months and owe it to her. I would definitely recommend hiring her as your trainer.",
  },
  {
    id: 4,
    name: "Xena Gail",
    desc: "My best decision I have made for myself was the commitment to improve my physical well being. I started working with Jenny in September 2022. Throughout my lifetime I have joined many different gyms and exercise programs with the goal to get physically fit. After not finding what I was looking for I decided to hire a trainer. After working with Jenny I have been blessed with the best trainer ever, in fact I don’t call her my trainer I call her my “exercise coach”. She coaches and encourages to find my better self. I feel stronger, I can now see muscles in my arms and legs, I have a lot more energy and my balance has greatly improved. In turn I feel better about myself physically and mentally.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    if (index < 0) {
      setCurrentIndex(reviews.length - 1);
    } else if (index > reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const review = reviews[currentIndex];

  return (
    <Box id="reviews" sx={{ padding: "2rem", textAlign: "center" }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginBottom: "2rem", color: "#fff" }}
      >
        Client Reviews
      </Typography>

      {review && (
        <Card
          sx={{
            marginBottom: "2rem",
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "#333",
          }}
        >
          <CardContent>
            {review.img && (
              <Image src={review.img} alt="image" width={200} height={200} />
            )}
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", marginBottom: "1rem", color: "#fff" }}
            >
              &quot; {review.desc} &quot;
            </Typography>
            <Typography variant="h6" sx={{ color: "#fff" }}>
              - {review.name}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <motion.div
          onClick={() => handleClick(currentIndex - 1)}
          whileHover={{ scale: 1.1 }}
        >
          <IconButton>
            <ChevronLeft sx={{ color: "#fff" }} />
          </IconButton>
        </motion.div>

        <motion.div
          onClick={() => handleClick(currentIndex + 1)}
          whileHover={{ scale: 1.1 }}
        >
          <IconButton>
            <ChevronRight sx={{ color: "#fff" }} />
          </IconButton>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Testimonials;
