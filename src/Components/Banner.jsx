import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/single-image1.png";

const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        overflow: "hidden",
        mt: 5,
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        background: `linear-gradient(95deg, #f5f5f5 55%, transparent 45%)`,
        position: "relative",
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              pr: { md: 4 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "primary.main",
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 1,
              }}
            >
              PUMA
            </Typography>
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontWeight: 900,
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                lineHeight: 1.2,
                mb: 3,
                background: "linear-gradient(45deg, #212121 30%, #424242 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Ultimate Destination for Sportswear
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                mb: 4,
                color: "text.secondary",
                maxWidth: "80%",
                mx: { xs: "auto", md: 0 },
              }}
            >
              Discover premium athletic wear with exclusive discounts and
              limited-time offers
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 700,
                borderRadius: "8px",
                boxShadow: 3,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 6,
                },
                transition: "all 0.3s ease",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              height: { xs: "300px", md: "400px" },
              width: "100%",
              backgroundImage: `url(${pic})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              animation: "float 3s ease-in-out infinite",
              "@keyframes float": {
                "0%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-20px)" },
                "100%": { transform: "translateY(0px)" },
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
