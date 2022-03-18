import Footer from "./components/Footer";
import Header from "./components/Header";
import Slider from "./components/Slider";
import { Route } from "react-router-dom";
import React from "react";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div className="page">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
