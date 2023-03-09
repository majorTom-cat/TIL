import React from "react";
import "./header.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import main_logo from "../images/main_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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
  return (
    <header>
      <ThemeProvider theme={theme}>
        <nav>
          <ul>
            <li className="logo">
              <a href="/">
                <img src={main_logo} alt="logo" width="150px;" height="45px;" />
              </a>
            </li>
            <li className="search1">
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 500,
                  // height: 40,
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
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <Button color="primary" variant="text">
                  <Typography variant="h5">Login</Typography>
                </Button>
              </Link>
              <Link to="SignUp" style={{ textDecoration: "none" }}>
                <Button color="primary" variant="text">
                  <Typography variant="h5">JOIN</Typography>
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </header>
  );
}
export default Header;
