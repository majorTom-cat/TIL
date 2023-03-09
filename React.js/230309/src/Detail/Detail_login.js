import { useState } from "react";
import Final_Main from "../Final/Final_Main";
import DetailContent from "./detail/body/DetailContent";
import DetailContentExplain from "./detail/body/DetailContentExplain";
import Footer from "./detail/footer/Footer";
import Login_header from "../Final/Header/Login_header";

const Detail = () => {
  const [userState, setUserState] = useState({
    isLogged: true,
    isFavorite: false,
  });

  const clickFavorite = () => {
    setUserState({
      isLogged: true,
      isFavorite: true,
    });
  };

  return (
    <>
      <Login_header userState={userState} />
      <DetailContent userState={userState} clickFavorite={clickFavorite} />
      <DetailContentExplain />
      <Footer />
    </>
  );
};

export default Detail;
