import { useState } from "react";
import Final_Main from "../Final/Final_Main";
import DetailContent from "./detail/body/DetailContent";
import DetailContentExplain from "./detail/body/DetailContentExplain";
import Footer from "./detail/footer/Footer";
import Header from "../Final/Header/Header";

const Detail = () => {
  const [userState, setUserState] = useState({
    isLogged: false,
    isFavorite: false,
  });

  const login = () => {
    setUserState({
      isLogged: true,
      isFavorite: false,
    });
  };

  const clickFavorite = () => {
    setUserState({
      isLogged: true,
      isFavorite: true,
    });
  };

  return (
    <>
      <Header userState={userState} login={login} />
      <DetailContent userState={userState} clickFavorite={clickFavorite} />
      <DetailContentExplain />
      <Footer />
    </>
  );
};

export default Detail;
