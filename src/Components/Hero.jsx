import { Box, Typography, Button } from "@mui/material";
import React from "react";
import heroImg from "../Assets/Images/about-2.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "70vh", md: "90vh" },
        background: `
          linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%),
          url(${heroImg})
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          color: "white",
          maxWidth: "1200px",
          px: 2,
          animation: "fadeIn 1s ease-in",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            lineHeight: 1.2,
            mb: 2,
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          Welcome to Puma
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            mb: 3,
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            maxWidth: "800px",
            mx: "auto",
            textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
          }}
        >
          Your Ultimate Destination for Exclusive Deals
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Discover curated collections, limited-time offers, and premium quality
          products that redefine your shopping experience
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: 700,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 15px rgba(33,150,243,0.4)",
            },
          }}
        >
          Explore Collection
        </Button>
      </Box>
    </Box>
  );
}
