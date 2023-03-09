import React from "react";
import "./Footer.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Box from "@mui/material/Box";
function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <div className="scroll__container">
        <button className="top" onClick={scrollToTop} type="button">
          <ArrowUpwardIcon />
        </button>
      </div>
      <footer>
        <div className="inner">
          <div className="copy">
            <p>
              Designed by Sence
              <br />ⓒ Sence Corp.
            </p>
          </div>
        </div>
      </footer>
    </Box>
  );
}
export default Footer;
