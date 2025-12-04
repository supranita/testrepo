import React from "react";
import Container from "./Container";
import heroImg from "../assets/heroImg.gif";

const Hero = () => {
  return (
    <Container>
      <div className="py-12">
        <div className="grid grid-cols-12 items-center gap-4 h-full">
          <div className="col-span-7 text-left">
            <h1 className="uppercase text-4xl font-bold tracking-wide">
              OWNERSHIP
              <br />
              made simple
            </h1>
            <p className="text-2xl mt-4">
              The first decentralized sports exchange to buy
              <br />
              ownership in your favorite sports teams, just like stocks.
            </p>
          </div>
          <div className="col-span-5 ">
            <div className="mx-auto flex justify-center">
              <img src={heroImg} alt="heroImg" className="w-60" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;