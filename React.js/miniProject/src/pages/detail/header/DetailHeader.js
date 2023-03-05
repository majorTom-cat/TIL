import ContentPicture from "../body/images/logo-black-on-white-background.jpg";

import DetailSearch from "./DetailSearch";
import DetailProfile from "./DetailProfile";

const DetailHeader = () => {
  const HeaderStyle = {
    backgroundColor: "#ffffff",
    position: "",
    padding: "1rem 1rem 1rem 1rem",
    width: "100%",
    height: "60px",
    overflow: "hidden",
    top: "100px",
    //align: "center",
    margin: "0px auto 0 auto",
    borderBottom: "3px solid #D9D9D9",
    display: "block",
  };

  // const HeaderLogoStyle = {
  //   display: "inline",
  //   margin: "0 auto 0 auto",
  // };

  const HeaderLogoStyle = {
    //display: "inline",
    width: "15%",
    height: "50px",
    verticalAlign: "middle",
    cursor: "pointer",
  };

  // const HeaderSearchStyle = {
  //   //display: "inline",
  //   width: "50px",
  //   height: "50px",
  //   verticalAlign: "middle",
  //   margin: "0 0 0 30px",
  // };

  // const HeaderProfileStyle = {
  //   //display: "inline",
  //   verticalAlign: "middle",
  //   width: "100px",
  //   height: "100px",
  // };

  // const activeStyle = {
  //   position: "relative",
  //   float: "left",
  //   width: "10%",
  //   height: "100%",

  //   fontFamily: "Inter",
  //   fontStyle: "italic",
  //   fontWeight: "900",
  //   fontSize: "36px",

  //   color: "black",
  //   textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  // };

  return (
    <div style={HeaderStyle}>
      {/* <div style={activeStyle}>LOGO</div> */}
      <img src={ContentPicture} alt="" style={HeaderLogoStyle}></img>

      <DetailSearch />

      <DetailProfile />
    </div>
  );
};

export default DetailHeader;
