const DetailSearch = () => {
  const activeStyle = {
    alignItems: "center",
    padding: "0px",
    gap: "4px",
    borderRadius: "10px",
    //textAlign: "center",
    color: "black",
    position: "relative",
    //float: "center",
    width: "30%",
    height: "70%",
    margin: "0 0 0 20%",
    border: "2px solid lightblue",
    textIndent: "30px",
  };

  return <input type="search" placeholder="Search" style={activeStyle} />;
};

export default DetailSearch;
