"use client";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import Image from "next/image";
import { logo, slide1, slide2, slide3 } from "../../assets";

const slides = [slide2, slide3, slide1];

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  // const scrollPrev = () => emblaApi?.scrollPrev();
  // const scrollNext = () => emblaApi?.scrollNext();

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Overlay Logo */}
      <Box
        sx={{
          position: "absolute",
          top: "62%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: { xs: 200, sm: 250, md: 250 }, // Responsive width
        }}
      >
        <Image
          src={logo}
          alt="logo"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>

      {/* Overlay Text */}
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: { xs: "10%", sm: "12%" }, // adjust top position on mobile
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: "#fff",
          fontSize: { xs: "1.5rem", sm: "3rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        Personal Training
      </Typography>

      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: { xs: "20%", sm: "32%" }, // adjust top position on mobile
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: "#fff",
          fontSize: { xs: "0.9rem", sm: "2rem", md: "3rem" },
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Transforming Lives <br />
        One Rep at a Time
      </Typography>

      {/* Embla Carousel Viewport */}
      <Box
        sx={{
          overflow: "hidden",
          width: "100vw",
          height: "100vh",
        }}
        ref={emblaRef}
      >
        <Box sx={{ display: "flex", height: "100%" }}>
          {slides.map((img, i) => (
            <Box
              key={i}
              sx={{
                flex: "0 0 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={img}
                alt={`slide-${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Prev/Next Controls */}
      {/* <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          transform: "translateY(-50%)",
          zIndex: 3,
        }}
      >
        <IconButton
          onClick={scrollPrev}
          sx={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowBack fontSize="large" />
        </IconButton>
        <IconButton
          onClick={scrollNext}
          sx={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
        >
          <ArrowForward fontSize="large" />
        </IconButton>
      </Box> */}
    </Box>
  );
};
