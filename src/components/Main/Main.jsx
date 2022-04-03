import React from "react";
import Benefits from "./Benefits/Benefits";
import Reviews from "./Reviews/Reviews";
import Slider from "./Slider/Slider";

const Main = () => {
  return (
    <div style={{ flex: "1" }}>
      <Slider />
      <div className="page">
        <Benefits />
        <Reviews />
      </div>
    </div>
  );
};

export default Main;
