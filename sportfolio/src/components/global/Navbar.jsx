

import React from "react";
import Container from "../Container";
import logo from "../../assets/LogoHeader.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <div className="bg-white ">
      <Container>
        <div className="grid grid-cols-12 py-5">
          <div className="flex items-center col-span-6">
            <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
            <span className="uppercase hidden md:block font-semibold ml-2 ">
              Sportfolio
            </span>
          </div>
          <div className="md:block hidden col-span-6">
            <div
              className={`ml-auto flex   ${
                location.pathname == "/demo"
                  ? "justify-end"
                  : "justify-center -mr-14"
              }`}
            >
              <Link
                to="/"
                className={`uppercase font-semibold ${
                  location.pathname == "/" ? "text-black" : "text-[#9b9b9b]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/demo"
                className={`uppercase font-semibold ml-3 ${
                  location.pathname == "/demo" ? "text-black" : "text-[#9b9b9b]"
                }`}
              >
                Demo
              </Link>
            </div>
          </div>
          <div className="md:hidden col-span-6 flex justify-end items-center">
            <Link
              to={location.pathname == "/" ? "/demo" : "/"}
              className="text-white bg-secondary px-5 py-2 uppercase font-bold rounded-md"
            >
              {location.pathname == "/demo" ? "Home" : "Demo"}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;