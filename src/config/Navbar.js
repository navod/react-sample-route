import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button, colors } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreIcon from "@mui/icons-material/MoreVert";
import UnstyledButtonsSpan from "../components/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { yellow } from "@mui/material/colors";
import "../screen/mediaquires/media.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      style={{ marginTop: 50 }}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
    borderRadius: 20,

    height: 55,
    justifyContent: "center",
    textAlign: "center",
    borderWidth: 0,
    fontSize: 30,
    fontWeight: "bold",
  }));

  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        style={{
          backgroundColor: "rgba(255,255,255,0.3)",
          position: "fixed",
          backdropFilter: "blur(9px)",
          zIndex: 1,
        }}
      >
        <Toolbar>
          <ColorButton>R</ColorButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                marginLeft: 10,
                color: "black",
                fontWeight: "bolder",
              }}
            >
              Rarible
            </Link>
          </Typography>
          <Search style={{ borderRadius: 20 }}>
            <SearchIconWrapper
              style={{
                borderRadius: 20,
              }}
            >
              <SearchIcon style={{ zIndex: 1, color: "#808080" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Collection, item or user"
              inputProps={{ "aria-label": "search" }}
              style={{
                backgroundColor: "#EDEDED",
                borderRadius: 20,
                fontWeight: "bold",
                color: "#808080",
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button variant="text" style={{ color: "black", marginRight: 20 }}>
              <Link
                to="/explorer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textTransform: "capitalize",
                }}
              >
                Explore
              </Link>
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                textTransform: "capitalize",
                marginRight: 20,
              }}
              className="left"
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/profile"
              >
                My profile
              </Link>
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                textTransform: "capitalize",
                marginRight: 20,
              }}
            >
              Following
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                textTransform: "capitalize",
                marginRight: 20,
              }}
            >
              Activity
            </Button>
            <Button
              variant="text"
              style={{
                color: "black",
                textTransform: "capitalize",
                marginRight: 20,
              }}
              className="howItWork"
            >
              How it works
            </Button>

            <Button
              variant="text"
              style={{
                color: "black",
                textTransform: "capitalize",
                marginRight: 20,
              }}
              endIcon={<ExpandMore style={{ color: "black" }} />}
              onClick={handleMobileMenuOpen}
            >
              Community
            </Button>
            <UnstyledButtonsSpan />
            <Button
              variant="text"
              style={{
                border: "1px solid #808080",
                borderRadius: 20,
                color: "black",
                marginLeft: 10,
                textTransform: "capitalize",
                padding: "0px 20px 0px 20px",
              }}
              className="signIn"
            >
              Sign In
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ color: "black" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    // background: "red",
    backgroundColor: "yellow",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "red",
    height: 48,
    padding: "0 30px",
  },
});
