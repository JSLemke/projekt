import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "1350px 650px", 
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", 
    height: "650px", 
  };
  return (
    <div className="h-[400px] w-full" style={bgImage}></div>
  );
};

export default BannerPic;
