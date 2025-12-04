
import React from "react";
import Container from "../Container";
import Logo from "../../assets/LogoFooter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 py-12">
        <Container>
          <div className="grid gap-6 md:grid-cols-12">
            <div className="col-span-6 grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <div className="flex items-center">
                  <img src={Logo} alt="logo" className="h-[40px]" />
                  <span className="text-white font-bold uppercase ml-2">
                    Sportfolio
                  </span>
                </div>
                <p className="text-white mt-3">
                  The first decentralized sports exchange to buy ownership in
                  your favorite sports teams, just like stocks.
                </p>
              </div>
            </div>
            <div className="col-span-3 ms-auto">
              <h3 className="font-bold text-white">Site</h3>
              <Link className="text-white mt-3 text-sm block" href="#">
                Home
              </Link>

              <Link className="text-white mt-2 text-sm block" href="#">
                Betting
              </Link>
              <Link className="text-white mt-2 text-sm block" href="#">
                Drafts
              </Link>
              <Link className="text-white mt-2 text-sm" href="#">
                How it Works
              </Link>
            </div>
            <div className="col-span-3">
              <h3 className="font-bold text-white">About</h3>
              <Link className="text-white mt-3 text-sm block" href="#">
                Privacy policy
              </Link>
              <Link className="text-white mt-2 text-sm block" href="#">
                Term of Use
              </Link>
              <Link className="text-white mt-2 text-sm block" href="#">
                Age Restrictions
              </Link>
              <Link className="text-white mt-2 text-sm" href="#">
                Team
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white p-5 flex justify-center">
        All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
