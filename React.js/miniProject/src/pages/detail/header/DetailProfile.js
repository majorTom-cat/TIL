import "../DetailHeader.css";
import profile from "../body/images/iconuser.png";

const DetailProfile = () => {
  const DetailProfileStyle = {
    //postion: "relative",
    //alignItems: "right",
    background: "#f8f9fa",
    border: "solid 0.1rem #dee2e6",
    borderRadius: "2rem",
    //boxSizing: "border-box",
    // display: "flex",
    height: "100px",
    width: "500px",
    display: "inline",
    margin: "0 0 0 15%",
    padding: "15px 0 15px 0",
    //verticalAlign: "middle",
  };

  const ProfileInnerStyle = {
    //postion: "absolute",
    display: "inline",
    verticalAlign: "middle",
    padding: "5px",
    cursor: "pointer",
    lineHeight: "0px",
  };

  return (
    <div style={DetailProfileStyle}>
      <img
        src={profile}
        width="40px"
        height="40px"
        alt=""
        style={ProfileInnerStyle}
      ></img>
      <span>
        <h3 style={ProfileInnerStyle}>user</h3>
      </span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span style={ProfileInnerStyle}>Logout</span>
    </div>
  );
};

export default DetailProfile;
