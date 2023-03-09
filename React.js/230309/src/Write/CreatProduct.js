import React, { useState } from "react";
import "./Product_Page_Style.css";
import { Link } from "react-router-dom";
import Footer from "../Final/Footer/Footer";
import main_logo from "../Final/images/main_logo.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const CreatProduct = () => {
  // 상태 변수 정의
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  // input 값 변경 시, 상태 변수 업데이트
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAddressSelect = (e) => {
    setFile(e.target.files[0]);
  };

  // 게시글 작성 버튼 클릭 시, 작성된 게시글 정보 출력
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(title, location, price, text, file);
    // 게시글 작성 로직
  };

  return (
    <div className="write_page">
      <h1 sytle="margin:5px;">
        <a href="/">
          <img src={main_logo} alt="logo" width="300px;" height="75px;" />
        </a>
      </h1>
      <div className="container">
        <h1 className="h1">게시글 작성하기</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="title">제목</label>
            <input
              className="in"
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="location-wrapper">
            <label htmlFor="location">거래 지역</label>
            <button type="button" onClick={handleAddressSelect}>
              주소 선택
            </button>
            <input
              className="in"
              type="text"
              id="location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className="fileup">
            <label htmlFor="file">파일 업로드</label>
            <input type="file" id="file" onChange={handleFileChange} />
            <div className="Thing">상품 가격</div>
            <div className="priceup">
              <Box>
                <Paper
                  className="price_input"
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    width: 210,
                    ml: 2,
                    borderRadius: "5px",
                  }}
                >
                  <input className="writeInput" placeholder="가격" />
                  <Typography
                    sx={{
                      display: "flex",
                      width: 200,
                      mt: 0.5,
                      mr: 2,
                    }}
                  >
                    원
                  </Typography>
                </Paper>
              </Box>
            </div>
          </div>
          <div>
            <label htmlFor="text">상세 설명</label>
            <textarea
              id="text"
              value={text}
              onChange={handleTextChange}
              placeholder="상품 소개"
            />
          </div>
          <div className="button-container">
            <div
              id="loginAlert"
              onClick={() => alert("작성이 완료되었습니다!")}
            >
              <Link to="/home" style={{ textDecoration: "none" }}>
                <button type="submit" className="modify-button">
                  확인
                </button>
              </Link>
            </div>
            <div
              id="loginAlert"
              onClick={() => alert("작성이 취소되었습니다!")}
            >
              <Link to="/home" style={{ textDecoration: "none" }}>
                <button type="button" className="cancel-button">
                  취소
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatProduct;
