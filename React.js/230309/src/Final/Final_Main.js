import React from "react";

import Header from "./Header/Header";
import Banner from "./banner/banner";
import List from "./List/List";
import Footer from "./Footer/Footer";
import "./Main.css";
function Main() {
  return (
    <div>
      <Header />
      <Banner />
      <List />
      <Footer />
    </div>
  );
}

export default Main;
