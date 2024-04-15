import React, { useState } from "react";
import Places from "../components/Places/Places";

const PlacesRoute = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  return (
    <div className="pt-14">
      <Places orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default PlacesRoute;
