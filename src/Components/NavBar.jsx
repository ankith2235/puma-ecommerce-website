import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

import logo from "../Assets/Images/puma.png";
import mobileLogo from "../Assets/Images/single-image1.png";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              maxWidth: { md: "240px", lg: "280px" },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="PUMA main logo"
              sx={{
                height: "auto",
                width: "100%",
                maxWidth: 280,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 0.8 },
              }}
            />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <Box
              component="img"
              src={mobileLogo}
              alt="PUMA mobile logo"
              sx={{
                height: 48,
                width: "auto",
                ml: 1,
              }}
            />

            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "text.primary",
                ml: "auto",
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="nav-menu"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  minWidth: 180,
                  boxShadow: 3,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    py: 1.5,
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
              gap: 4,
              pr: 4,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: 4,
                    left: 0,
                    width: 0,
                    height: 2,
                    backgroundColor: "primary.main",
                    transition: "width 0.3s ease",
                  },
                  "&:hover:after": {
                    width: "100%",
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
