import React from "react";

import mainbanner from "../images/main_banner1.png";
import SimpleImageSlider from "react-simple-image-slider";
import "../Header/header.css";

const Header2 = () => {
  const sliderImages = [{ url: mainbanner }, { url: mainbanner }];
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={450}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default Header2;
