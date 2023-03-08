import React from "react";
import "./header.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import main_logo from "./images/main_logo.png";
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
              <a href="index.html">
                <img src={main_logo} alt="logo" width="130px;" height="35px;" />
              </a>
            </li>
            <li className="search">
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search "
                inputProps={{ "aria-label": "search" }}
              />
            </li>
            <li className="Login_Join">
              <Button color="primary" variant="text">
                Login
              </Button>
              <Button color="primary" variant="text">
                Join
              </Button>
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </header>
  );
}

export default Header;
