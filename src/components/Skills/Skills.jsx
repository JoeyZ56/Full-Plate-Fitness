"use client";
import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TrainingType = ({ title, content }) => {
  return (
    <Accordion
      sx={{
        mb: 2,
        borderRadius: 1,
        backgroundColor: "transparent",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
        aria-controls={`${title}-content`}
        id={`${title}-header`}
        sx={{
          backgroundColor: "#333",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{ color: "#fff" }}>
          {title}
        </Typography>
      </AccordionSummary>

      <Box sx={{ backgroundColor: "#333" }}>
        {content.map((paragraph, index) => (
          <AccordionDetails key={index}>
            <Typography variant="body1" sx={{ color: "#fff" }}>
              <strong>{paragraph.title}</strong>: {paragraph.content}
            </Typography>
          </AccordionDetails>
        ))}
      </Box>
    </Accordion>
  );
};

const Skills = () => {
  const theme = useTheme();

  return (
    <Container sx={{ py: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#fff",
          fontSize: { xs: "1.75rem", sm: "2.25rem" },
        }}
      >
        Versatile Fitness Professional
      </Typography>

      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 2,
            color: "#fff",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          Style of Training
        </Typography>

        <TrainingType
          title="Strength Training"
          content={[
            {
              title: "Build Lean Muscle Mass",
              content:
                "Sculpt your body and achieve a toned, athletic physique with exercises that target specific muscle groups.",
            },
            {
              title: "Boost Metabolism",
              content:
                "As you build muscle, your metabolism increases, helping you burn more calories during and after workouts.",
            },
            {
              title: "Injury Prevention",
              content:
                "Support joint stability and flexibility to reduce the risk of injuries through balanced strength training.",
            },
            {
              title: "Mental Resilience",
              content:
                "Develop discipline and a positive mindset that extends beyond the gym.",
            },
          ]}
        />

        <TrainingType
          title="Functional Training"
          content={[
            {
              title: "Real-Life Applications",
              content:
                "Prepare your body for everyday activities by mimicking natural movement patterns.",
            },
            {
              title: "Core Strength and Stability",
              content:
                "A strong, stable core improves posture and supports overall movement.",
            },
            {
              title: "Enhanced Flexibility",
              content: "Increase your range of motion and move more freely.",
            },
            {
              title: "Efficient Workouts",
              content:
                "Engage multiple muscle groups to build strength and burn calories effectively.",
            },
          ]}
        />
      </Box>

      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 2,
            color: "#fff",
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          }}
        >
          Nutrition Coaching
        </Typography>

        {[
          {
            title: "Weekly Meetings",
            content: [
              {
                title: "Weekly Meetings",
                content:
                  "Personalized sessions for goal setting, progress review, and adjustments to your fitness journey.",
              },
            ],
          },
          {
            title: "Accountability",
            content: [
              {
                title: "Accountability",
                content:
                  "Stay motivated with support and strategies to overcome challenges and build lasting habits.",
              },
            ],
          },
          {
            title: "Education about food & fuel",
            content: [
              {
                title: "Education about food & fuel",
                content:
                  "Learn how to fuel your body properly and make confident, informed choices.",
              },
            ],
          },
          {
            title: "Food/Macro tracking",
            content: [
              {
                title: "Food/Macro tracking",
                content:
                  "Track your intake to optimize energy, enhance performance, and meet your goals.",
              },
            ],
          },
        ].map((props, idx) => (
          <TrainingType key={idx} {...props} />
        ))}
      </Box>
    </Container>
  );
};

export default Skills;
