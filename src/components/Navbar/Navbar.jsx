import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navLinks = [
    { label: "About", to: "about", offset: -25 },
    { label: "Training", to: "skills", offset: -25 },
    { label: "Reviews", to: "reviews" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo / Title */}
        <Button color="inherit" onClick={scrollToTop}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: { xs: "0.8rem", sm: "1.25rem", md: "1.5rem" } }}
          >
            Fullplate Fitness
          </Typography>
        </Button>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {navLinks.map(({ label, to, offset = 0 }) => (
                <MenuItem key={to} onClick={closeMenu}>
                  <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={offset}
                  >
                    {label}
                  </ScrollLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            {navLinks.map(({ label, to, offset = 0 }) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={offset}
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Typography variant="button">{label}</Typography>
              </ScrollLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
