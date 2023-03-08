import ContentPicture from "./images/placeholder.png";
import favorite from "../body/images/iconheart.png";
import eyes from "../body/images/iconeyes.png";
import DetailPicture from "./DetailPicture";
import { useState } from "react";
import PurchaseModal from "./PurchaseModal";
import "./style/contentStyle.css";

const DetailContent = () => {
  // 찜, 구매요청 마우스 호버시 버튼 색상 관련
  const [btnColor, setBtnColor] = useState({
    favoriteBtn: "#FF8A2D",
    requestBtn: "#FF8A2D",
  });

  const favoriteBtnMouseOver = () => {
    setBtnColor({
      favoriteBtn: "#f77810",
      requestBtn: "#FF8A2D",
    });
  };

  const favoriteBtnMouseLeave = () => {
    setBtnColor({
      favoriteBtn: "#FF8A2D",
      requestBtn: "#FF8A2D",
    });
  };

  const requestBtnMouseOver = () => {
    setBtnColor({
      favoriteBtn: "#FF8A2D",
      requestBtn: "#f77810",
    });
  };

  const requestBtnMouseLeave = () => {
    setBtnColor({
      favoriteBtn: "#FF8A2D",
      requestBtn: "#FF8A2D",
    });
  };

  // --------------------------------

  const Content = {
    //overflow: "hidden",
    align: "center",
    position: "",
    margin: "50px auto 50px auto",
    //border: "2px solid black",
    width: "90%",
    display: "block",
  };

  const PictureDiv = {
    position: "relative",
    width: "50%",
    height: "100%",
    display: "inline-block",
    margin: "auto auto auto 50px",
    alignItem: "center",
  };

  // const PictureStyle = {
  //   width: "100%",
  //   height: "100%",
  //   margin: "0 0 0 0",
  // };

  // 사진을 제외한, 상품 정보를 나타내는 요소들을 묶는 전체 div의 스타일
  const ContentStyle = {
    position: "relative",
    width: "35%",
    height: "400px",
    float: "right",
    display: "inline-block",
    margin: "0 30px 0 10px",
    border: "1px solid #FEA82F ",
    borderRadius: "20px",
    padding: "0 0 0 20px",
  };

  // 찜, 조회수의 아이콘+숫자 블럭 스타일
  const ContentIconStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 0 0",
  };

  // 하트, 눈 이미지 스타일
  const iconstyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
  };

  // 찜(하트) 아이콘과 찜 누른 숫자를 감싸는 div의 스타일
  const FavoriteDivStyle = {
    display: "inline-block",
    //backgroundColor: "#dee2e6",
    border: "1px solid #FEA82F ",
    borderRadius: "10px",
    width: "70px",
    height: "30px",
    margin: "20px 0 0 50px",
  };

  // 조회수(눈) 아이콘과 조회수를 감싸는 div의 스타일
  const ViewDivStyle = {
    display: "inline-block",
    //backgroundColor: "#dee2e6",
    border: "1px solid #FEA82F ",
    borderRadius: "10px",
    width: "70px",
    height: "30px",
    margin: "0 0 0 10px",
  };

  // 연관 태그의 tag 버튼들을 감싸는 ul의 스타일
  const ContentTagUlStyle = {
    listStyle: "none",
    margin: "-10px 0 0 30px",
  };

  // 연관 태그의 tag 버튼들. li 형식으로 구현한 요소들의 스타일
  const ContentTagLiStyle = {
    listStyle: "none",
    display: "inline-block",
    padding: "10px",
    margin: "20px 0 0 10px",
    width: "70px",
  };

  // 찜, 구매요청 버튼을 감싸는 div의 스타일
  const ContentButtonDivStyle = {
    display: "block",
    textAlign: "center",
    margin: "20px 0px 10px 30px",
    padding: "0",
    overflow: "hidden",
  };

  const ContentButtonStyle = {
    overflow: "hidden",
    display: "inline",

    favorite: {
      display: "inline",
      borderRadius: "20px",
      marginRight: "20px",
      width: "80px",
      height: "60px",
      backgroundColor: btnColor.favoriteBtn,
      color: "white",
      fontSize: "1rem",
      border: "1px",
      cursor: "pointer",
    },

    request: {
      display: "inline",
      borderRadius: "20px",
      marginRight: "50px",
      width: "80px",
      height: "60px",
      backgroundColor: btnColor.requestBtn,
      color: "white",
      fontSize: "1rem",
      border: "1px",
      cursor: "pointer",
      onClick: {
        backgroundColor: "blue",
      },
    },
  };

  const [favoriteCount, setFavoriteCount] = useState(0);

  const ClickFavorite = () => {
    setFavoriteCount(favoriteCount + 1);
    console.log(favoriteCount);
  };

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const purchaseInfo = [
    {
      userId: "0000001",
      userName: "fasd0412",
      purchasePrice: "123,456",
      userLocation: "OO시 OO구 OO동",
    },
  ];

  const modalHeading = "구매요청 확인";

  return (
    <div style={Content}>
      {/* //header 부분에 modalHeading 변수에 저장된 텍스트를 입력 */}
      <PurchaseModal
        open={modalOpen}
        close={closeModal}
        header={modalHeading}
        purchase={purchaseInfo[0]}
      >
        {/* // PurchaseModal.js <main> {props.children} </main>에 내용이 입력된다.
        함수형 모달 팝업창 */}
      </PurchaseModal>

      <div className="PictureDiv" style={PictureDiv}>
        {/* <img src={ContentPicture} alt="" style={PictureStyle}></img> */}
        <DetailPicture className="PictureDiv" />
      </div>

      <div className="content" style={ContentStyle}>
        <h2 style={{ padding: "20px 0 0 20px" }}>
          {purchaseInfo[0].purchasePrice} 원
        </h2>

        <div style={FavoriteDivStyle}>
          <span style={ContentIconStyle}>
            &nbsp; <img src={favorite} style={iconstyle} alt="Img Not Found" />
            &nbsp;&nbsp;&nbsp;{favoriteCount}
          </span>
        </div>

        <div style={ViewDivStyle}>
          <span style={ContentIconStyle}>
            &nbsp; <img src={eyes} style={iconstyle} alt="Img Not Found" />
            &nbsp;&nbsp; 1
          </span>
        </div>

        <h3 style={{ padding: "20px 0 0 20px" }}>거래지역</h3>
        <p style={{ padding: "20px 0 0 20px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {purchaseInfo[0].userLocation}
        </p>
        <h3 style={{ padding: "20px 0 0 20px" }}>연관 태그</h3>

        <ul style={ContentTagUlStyle}>
          <li className="liTag" style={ContentTagLiStyle}>
            <button className="tag">tag 1</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 2</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 3</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 4</button>
          </li>
        </ul>

        <div style={ContentButtonDivStyle}>
          <button
            className="ContentButtonStyle favorite"
            style={ContentButtonStyle.favorite}
            onClick={ClickFavorite}
            onMouseMove={favoriteBtnMouseOver}
            onMouseLeave={favoriteBtnMouseLeave}
            name="favoriteBtn"
          >
            <b>찜</b>
          </button>

          <button
            className="ContentButtonStyle request"
            style={ContentButtonStyle.request}
            onClick={openModal}
            onMouseOver={requestBtnMouseOver}
            onMouseLeave={requestBtnMouseLeave}
            name="requestBtn"
          >
            <b>구매요청</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
