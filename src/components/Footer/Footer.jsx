import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import Image from "next/image";
import { logo } from "../../assets";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: "1rem 0", // Reduced padding for a more compact footer
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", // Ensure responsiveness
        }}
      >
        {/* Logo and copyright section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Image src={logo} alt="logo" width={50} height={50} />
          <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
            Full Plate Fitness &copy; {new Date().getFullYear()}
          </Typography>
        </Box>

        {/* Social Media Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9rem",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            Find Me On Facebook!
          </Typography>

          <a
            href="https://www.facebook.com/jennifer.mccurdy.980"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <IconButton
              sx={{
                backgroundColor: "#3b5998",
                color: "white",
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#2d4373",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
