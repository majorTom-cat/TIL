import ContentPicture from "./images/placeholder.png";
import favorite from "../body/images/iconheart.png";
import eyes from "../body/images/iconeyes.png";
import DetailPicture from "./DetailPicture";
import { useState } from "react";

const DetailContent = () => {
  const Content = {
    overflow: "hidden",
    align: "center",
    position: "",
    margin: "50px auto 50px auto",
    //border: "2px solid black",
    width: "90%",
    display: "block",
  };

  const PictureDiv = {
    position: "",
    width: "50%",
    height: "100%",
    display: "inline-block",
    margin: "auto auto auto 50px",
    alignItem: "center",
  };

  const PictureStyle = {
    width: "100%",
    height: "100%",
    margin: "0 0 0 0",
  };

  const ContentStyle = {
    position: "relative",
    width: "35%",
    height: "400px",
    float: "right",
    display: "inline-block",
    margin: "0 30px 0 10px",
    border: "1px solid #0984e3",
    padding: "0 0 0 20px",
  };

  const ContentIconStyle = {
    //verticalAlign: "center",
    //lineHeight: "0px",
    //padding: "0px 0 0 0",
    //margin: "10px 0 0 0",
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 0 0",
  };

  const iconstyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
  };

  const FavoriteDivStyle = {
    display: "inline-block",
    backgroundColor: "#dee2e6",
    borderRadius: "10px",
    width: "70px",
    height: "30px",
    margin: "0 0 0 50px",
  };

  const ViewDivStyle = {
    display: "inline-block",
    backgroundColor: "#dee2e6",
    borderRadius: "10px",
    width: "70px",
    height: "30px",
    margin: "0 0 0 10px",
  };

  const ContentTagUlStyle = {
    listStyle: "none",
  };

  const ContentTagLiStyle = {
    listStyle: "none",
    display: "inline-block",
    padding: "10px",
  };

  const ContentButtonDivStyle = {
    display: "block",
    textAlign: "center",
    margin: "0px 0px 10px 30px",
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
      backgroundColor: "#d63031",
      color: "white",
      fontSize: "1rem",
      //border: "1px",
      cursor: "pointer",
    },

    request: {
      display: "inline",
      borderRadius: "20px",
      marginRight: "50px",
      width: "80px",
      height: "60px",
      backgroundColor: "#0A58CA",
      color: "white",
      fontSize: "1rem",
      //border: "1px",
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

  return (
    <div style={Content}>
      <div className="DetailContentPicture" style={PictureDiv}>
        {/* <img src={ContentPicture} alt="" style={PictureStyle}></img> */}
        <DetailPicture />
      </div>

      <div style={ContentStyle}>
        <h2 style={{ padding: "0 0 0 20px" }}>123,456 원</h2>

        <div style={FavoriteDivStyle}>
          <span style={ContentIconStyle}>
            &nbsp; <img src={favorite} style={iconstyle} />
            &nbsp;&nbsp;&nbsp;{favoriteCount}
          </span>
        </div>

        <div style={ViewDivStyle}>
          <span style={ContentIconStyle}>
            &nbsp; <img src={eyes} style={iconstyle} /> &nbsp;&nbsp; 1
          </span>
        </div>

        <h3 style={{ padding: "0 0 0 20px" }}>거래지역</h3>
        <p style={{ padding: "0 0 0 20px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp; 시시시 구구구 동동동
        </p>
        <h3 style={{ padding: "0 0 0 20px" }}>연관 태그</h3>

        <ul style={ContentTagUlStyle}>
          <li style={ContentTagLiStyle}>
            <button>tag 1</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button>tag 2</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button>tag 3</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button>tag 4</button>
          </li>
        </ul>

        <div style={ContentButtonDivStyle}>
          <button style={ContentButtonStyle.favorite} onClick={ClickFavorite}>
            <b>찜</b>
          </button>
          <button style={ContentButtonStyle.request}>
            <b>구매요청</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
