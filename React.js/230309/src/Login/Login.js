import React, { useState } from "react";
import google from "./google.PNG";
import kakao from "./kakao.PNG";
import github from "./git.PNG";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import main_logo from "./main_logo.png";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Footer from "../Final/Footer/Footer";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const theme = createTheme({
    typography: {
      fontFamily: "'Noto Sans KR', sans-serif",
    },
    palette: {
      primary: {
        light: "#ffffff",
        main: "#000000",
        dark: "#bdbdbd",
      },
      secondary: {
        main: "#FF8A2D",
        dark: "#ffcc80",
        contrastText: "#ffffff",
        light: "#ffffff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="page">
        <div className="titleWrap" align="center">
          <div className="head">
            <h1 sytle="margin:5px;">
              <a href="/">
                <img src={main_logo} alt="logo" width="300px;" height="75px;" />
              </a>
            </h1>
            <br />
            <h5>Login with</h5>
          </div>
          <div className="log_btn">
            <button type="button" className="google">
              <img src={google} />
            </button>
            <button type="button" className="kakao">
              <img src={kakao} />
            </button>
            <button type="button" className="github">
              <img src={github} />
            </button>
          </div>
          <div class="hr-sect ">OR</div>
          <br />
        </div>

        <div className="contentWrap">
          <div className="inputTitle"></div>

          <div className="inputWrap">
            <TextField
              margin="normal"
              required
              fullWidth
              id="ID"
              label="ID"
              name="ID"
              autoComplete="ID"
              autoFocus
              color="secondary"
            />
          </div>

          <div style={{ marginTop: "26px" }} className="inputTitle"></div>
          <div className="inputWrap">
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
            />
          </div>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              className="bottomButton"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                mt: -1,
                mb: 3,
                ml: 2,
              }}
            >
              <Typography variant="h5">Login</Typography>
            </Button>
          </Link>
          <div className="nav" align="center">
            <Link to="/SignUp" style={{ textDecoration: "none" }}>
              <Button className="account">회원 가입</Button>
            </Link>
            <Button className="id">아이디 찾기</Button>
            <Button className="pw">비밀번호 찾기</Button>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
