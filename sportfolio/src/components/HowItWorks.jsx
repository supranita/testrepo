import React from "react";
import check from "../assets/Check.png";
import percentage from "../assets/Percentage.png";
import crypto from "../assets/Crypto.png";
import trade from "../assets/Trade.png";
import BarChart from "../assets/BarChart.gif";

const HowItWorks = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="bg-blue-500 col-span-12 lg:col-span-6 lg:pl-[17%]">
          <div className="p-6 lg:p-10">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-2xl md:text-6xl lg:text-8xl font-bold text-center lg:text-right uppercase text-white whitespace-pre-wrap">
                How{"\n"}it{"\n"}works
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-white col-span-12 lg:col-span-6 pr-[17%]">
          <div className="p-6 lg:p-10">
            <div className="flex items-center">
              <div className="w-10 md:w-16 h-10 md:h-16 bg-slate-800 rounded-full flex justify-center items-center">
                <img src={check} alt="check" className="w-1/3" />
              </div>
              <p className="pl-2 text-base">
                We perform an Independent pre IPO due diligence process of a
                sports team.
              </p>
            </div>

            <div className="flex items-center mt-6">
              <div className="w-10 md:w-16 h-10 md:h-16 bg-blue-500 rounded-full flex justify-center items-center">
                <img src={percentage} alt="check" className="w-1/3" />
              </div>
              <p className="pl-2 text-base">
                We perform an Independent pre IPO due diligence process of a
                sports team.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-10 md:w-16 h-10 md:h-16 bg-blue-500 rounded-full flex justify-center items-center">
                <img src={crypto} alt="check" className="h-1/2" />
              </div>
              <p className="pl-2 text-base">
                We perform an Independent pre IPO due diligence process of a
                sports team.
              </p>
            </div>
            <div className="flex items-center mt-6">
              <div className="w-10 md:w-16 h-10 md:h-16 bg-blue-500 rounded-full flex justify-center items-center">
                <img src={trade} alt="check" className="w-1/2" />
              </div>
              <p className="pl-2 text-base">
                We perform an Independent pre IPO due diligence process of a
                sports team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="bg-white col-span-12 lg:col-span-6 pl-[17%] order-2 lg:order-1">
          <img src={BarChart} alt="chart" />
        </div>
        <div className="bg-slate-800 col-span-12 lg:col-span-6 pr-[17%]">
          <div className="p-6 lg:p-10">
            <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-left uppercase text-white whitespace-pre-wrap !leading-[100px]">
              Price{"\n"}
              appreciation{"\n"}
              vs{"\n"}
              other asset classes{"\n"}
              1995 to 2022
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;