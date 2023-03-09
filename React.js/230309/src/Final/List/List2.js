import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { deepOrange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CreateIcon from "@mui/icons-material/Create";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../Main.css";
import { Link } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  palette: {
    primary: {
      light: "#ffffff",
      main: "#FF8A2D",
      dark: "#bdbdbd",
    },
    secondary: {
      main: "#FF8A2D",
      dark: "#ffcc80",
      contrastText: "#white",
    },
  },
});
const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
function List() {
  const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <>
      <main>
        <ThemeProvider theme={theme}>
          <Link to="/Write" style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              sx={{ mt: 3, mb: 0, ml: "90%", borderRadius: "16px" }}
              startIcon={<CreateIcon />}
            >
              글쓰기
            </Button>
          </Link>
          <Container sx={{ py: 8 }} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={2}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Link to="Detail" style={{ textDecoration: "none" }}>
                    <Button
                      color="secondary"
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: "16px" }}
                    >
                      <Card
                        style={{ border: "none", boxShadow: "none" }}
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",

                          color: "primary",
                        }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            // 16:9
                            pt: "30%",
                          }}
                          image="https://source.unsplash.com/random"
                          alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h1"
                            align="left"
                          >
                            <LocationOnIcon sx={{ color: deepOrange[300] }} />
                            지역
                          </Typography>
                          <Typography variant="h6">물건 상세 정보</Typography>
                          <Avatar sx={{ bgcolor: deepOrange[300] }}>U</Avatar>
                          <Typography
                            variant="h5"
                            sx={{ mt: -4, mb: 0, ml: -8 }}
                          >
                            USER
                          </Typography>
                          <Typography
                            variant="caption"
                            display="block"
                            sx={{ mt: -3, mb: 0, ml: 25 }}
                            color="primary.dark"
                          >
                            2023/03/02
                          </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </ThemeProvider>
      </main>
      <div className="scroll__container">
        <button className="top" onClick={scrollToTop} type="button">
          <ArrowUpwardIcon />
        </button>
      </div>
    </>
  );
}

export default List;
