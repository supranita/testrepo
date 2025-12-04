import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const Main = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Main;