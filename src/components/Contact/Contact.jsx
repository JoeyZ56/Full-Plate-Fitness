"use client";
import { Box, Typography, Paper, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 6, textAlign: "center" }}>
      <Box>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
            px: 2,
            color: "#fff",
          }}
        >
          For personalized fitness guidance tailored to your goals
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
            px: 2,
            color: "#fff",
          }}
        >
          please feel free to reach out!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          mt: 4,
        }}
      >
        {[
          {
            href: "mailto:jennifermccurdy@gmail.com",
            icon: <EmailIcon fontSize="large" />,
            label: "jennifermccurdy@gmail.com",
          },
          {
            href: "tel:+15305142339",
            icon: <PhoneIcon fontSize="large" />,
            label: "+1 (530) 514-2339",
          },
        ].map(({ href, icon, label }, idx) => (
          <Link
            key={idx}
            href={href}
            underline="none"
            sx={{ textDecoration: "none", width: { xs: "100%", sm: "auto" } }}
            aria-label={`Contact via ${
              label.includes("@") ? "email" : "phone"
            }`}
          >
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "tween" }}
            >
              <Paper
                elevation={3}
                sx={{
                  px: 3,
                  py: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  cursor: "pointer",
                  minWidth: { xs: "90%", sm: 300 },
                  maxWidth: 320,
                  marginX: "auto",
                  backgroundColor: "#333",
                  color: "#fff",
                }}
              >
                {icon}
                <Typography variant="body1" sx={{ whiteSpace: "nowrap" }}>
                  {label}
                </Typography>
              </Paper>
            </motion.div>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Contact;
