import profile from "./images/image-07.jpg";

const DetailContentExplain = () => {
  const ContentExplainStyle = {
    overflow: "hidden",
    //align: "center",
    //position: "",
    margin: "0 auto 30px auto",
    //border: "2px solid black",
    width: "90%",
    height: "300px",
    display: "block",
  };

  const ContentExplainUserStyle = {
    display: "block",
    overflow: "hidden",
    background: "#dfe6e9",
    border: "1px solid #81ecec",
    borderBottom: "0px solid #00cec9",
    width: "95%",
    //height: "18%",
    margin: "0 auto 0 50px",
    //justifyContent: "center",
    //alignItem: "center",
    //verticalAlign: "middle",
  };

  const UserProfile = {
    width: "40px",
    height: "40px",
    borderRadius: "70%",
    margin: "7px 0 30px 20px",
    //padding: "-50px 0 0 0",
    display: "inline",
    cursor: "pointer",
  };

  const ProfilePtag = {
    //display: "inline",
    margin: "-50px auto 20px 70px",
    //padding: "-50px 0 0 0",
    justifyContent: "center",
    align: "center",
    width: "100px",
    height: "0px",
    color: "#0984e3",
    cursor: "pointer",
    lineHeight: "0px",
  };

  const ContentExplainAreaStyle = {
    border: "1px solid #81ecec",
    borderTop: "1px solid #00cec9",
    width: "95%",
    height: "80%",
    margin: "0 auto 0 50px",
  };

  const ExplainPtag = {
    margin: "20px",
    fontSize: "1rem",
  };

  return (
    <div style={ContentExplainStyle}>
      <div style={ContentExplainUserStyle}>
        <img src={profile} style={UserProfile} alt="" />
        <p style={ProfilePtag}>
          <b>username</b>
        </p>
      </div>

      <div style={ContentExplainAreaStyle}>
        <h4 style={{ margin: "20px" }}>게시글 제목</h4>
        <p style={ExplainPtag}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
          cum sociis natoque penatibus et magnis dis parturient. Pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras. Tempor nec feugiat nisl
          pretium fusce id velit ut. Cursus turpis massa tincidunt dui ut
          ornare. Phasellus faucibus scelerisque eleifend donec pretium
          vulputate sapien. Amet nisl purus in mollis nunc sed id semper. Mauris
          ultrices eros in cursus turpis massa. Quis risus sed vulputate odio ut
          enim. Sed libero enim sed faucibus turpis in eu mi. Amet volutpat
          consequat mauris nunc congue nisi vitae. Eu tincidunt tortor aliquam
          nulla facilisi. Phasellus faucibus scelerisque eleifend donec pretium
          vulputate sapien nec.
        </p>
      </div>
    </div>
  );
};

export default DetailContentExplain;
