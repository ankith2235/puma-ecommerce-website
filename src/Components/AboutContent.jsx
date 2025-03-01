import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import aboutImg from "../Assets/Images/about-1.jpg";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, md: 4 } }}>
      <Grid
        container
        sx={{
          backgroundColor: "rgba(172, 171, 117, 0.1)",
          borderRadius: "20px",
          boxShadow: 3,
          overflow: "hidden",
          "&:hover": {
            boxShadow: 6,
            transition: "all 0.3s ease-in-out",
          },
        }}
      >
        <Grid item xs={12} md={6} sx={{ p: { xs: 1, md: 2 } }}>
          <Box
            component="img"
            src={aboutImg}
            alt="Team members working at PUMA"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: 3,
              transform: "scale(0.98)",
              "&:hover": {
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              },
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              p: { xs: 2, md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "2.5rem" },
                mb: 2,
                letterSpacing: "0.05em",
                "& span": {
                  color: "primary.main",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                },
              }}
            >
              About <span>Us</span>
            </Typography>

            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                color: "text.secondary",
                mb: 3,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              Your Trusted Shopping Destination
            </Typography>

            <Box
              sx={{
                "& > *": { mb: 2.5 },
                textAlign: "justify",
                lineHeight: 1.7,
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                At PUMA, we revolutionize shopping through curated collections
                of premium products, combining quality craftsmanship with
                innovative design across fashion, electronics, and lifestyle
                categories.
              </Typography>

              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                Our mission is to empower your shopping journey with seamless
                experiences, competitive pricing, and personalized service. We
                prioritize sustainability and customer satisfaction in every
                transaction.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "primary.main",
                }}
              >
                Discover the future of e-commerce with PUMA – where innovation
                meets exceptional value. ✨
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
