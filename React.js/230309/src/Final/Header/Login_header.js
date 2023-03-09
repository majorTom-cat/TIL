import React from "react";
import "./header.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import main_logo from "../images/main_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

function Header() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif",
    },
    palette: {
      primary: {
        main: "#FF8A2D",
      },
    },
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header>
      <ThemeProvider theme={theme}>
        <nav>
          <ul>
            <li className="logo">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <a href="index.html">
                  <img
                    src={main_logo}
                    alt="logo"
                    width="150px;"
                    height="45px;"
                  />
                </a>
              </Link>
            </li>
            <li className="search1">
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 500,
                  // height: 50,
                  ml: 1,
                  border: "3px solid #fea82f",
                  borderRadius: "16px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, width: 430 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search " }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  color="primary"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </li>
            <li className="Login_Join">
              <Stack
                className="Stack"
                sx={{ mt: 0, mb: 0, ml: "25%" }}
                direction="row"
                spacing={2}
                justifyContent="right"
              >
                <Tooltip>
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    sx={{ mr: 5 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{ width: 32, height: 32, bgcolor: deepOrange[300] }}
                    >
                      M
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    color: "primary",
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar sx={{ bgcolor: deepOrange[300] }} /> Profile
                  </MenuItem>

                  <Link to="/" style={{ textDecoration: "none" }}>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      <Typography fontSize="small" color="primary">
                        Logout
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu>
              </Stack>
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </header>
  );
}
export default Header;
