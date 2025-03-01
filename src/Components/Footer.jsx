import React from "react";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import footer from "../Assets/Images/puma3.png";

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={6}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        py: 6,
        px: { xs: 2, md: 8 },
        mt: 8,
        borderTop: "2px solid",
        borderColor: "primary.main",
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Brand Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={footer}
              alt="PUMA Logo"
              sx={{
                width: { xs: "160px", md: "200px" },
                height: "auto",
                mb: 2,
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                color: "text.secondary",
              }}
            >
              Empowering Your Shopping Experience
            </Typography>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Quick Links
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {["Home", "About", "Shop"].map((link) => (
              <Link
                key={link}
                component={RouterLink}
                to={`/${link.toLowerCase()}`}
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateX(4px)",
                  },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              color: "text.secondary",
            }}
          >
            <Typography>Email: support@puma.com</Typography>
            <Typography>Phone: +1 (800) 555-PUMA</Typography>
            <Typography>Address: 123 Sport Street, NYC</Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          mt: 4,
          pt: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            "& a": {
              color: "primary.main",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
          }}
        >
          © {new Date().getFullYear()} PUMA. All rights reserved. |
          <Link href="/privacy" sx={{ ml: 1 }}>
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms" sx={{ ml: 1 }}>
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
