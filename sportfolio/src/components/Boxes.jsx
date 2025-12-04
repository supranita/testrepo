import React from "react";
import BoxText from "./BoxText";

const Boxes = () => {
  return (
    <>
      <div className="grid h-[400px] grid-cols-12">
        <div className="bg-slate-500 flex items-center pr-16 pl-[17%] col-span-12 lg:col-span-6">
          <BoxText
            title="Physical meets digital"
            desc1="There hasn’t been a transparent, easy way to invest in sports until now. We partner with the sports teams to tokenize ownership and issue tokens in the form of shares via an Initial Public Offering (IPO)"
            desc2="Let’s play together as a team to make fractional ownership accessible for all, not just the top dogs."
          />
        </div>

        <div className="bg-slate-800 flex items-center pl-16 pr-[17%] col-span-12 lg:col-span-6">
          <BoxText
            title="TOKENIZATION OF AN ASSET"
            desc1="Via asset tokenization we create digital tokens on a distributed ledger or blockchain, which represents the digital ownership of a physical sports team."
            desc2="In simple terms, after regulatory qualifications, we shift an Off-Chain asset (physical) to an On-Chain digital blockchain network."
          />
        </div>
      </div>

      <div className="grid h-[400px] grid-cols-12">
        <div className="bg-blue-400 flex items-center pr-16 pl-[17%] col-span-12 lg:col-span-6">
          <BoxText
            title="INTRINSIC VALUE OF AN ATHLETE"
            desc1="Each team roster is placed into our proprietary algorithm to calculate the intrinsic value of an athlete based on the real game stats, player importance and impact on wins."
            desc2="After that, via our secure portal a qualified investor can buy shares of each athlete to build their ownership in a specific sports team."
          />
        </div>

        <div className="bg-blue-700 flex items-center pl-16 pr-[17%] col-span-12 lg:col-span-6">
          <BoxText
            title="WORK IN PROGRESS"
            desc1="Currently, we’re in beta and actively working towards a partnership with many sports leagues such as National Basketball Association, National Football League, National Hockey League, Major Soccer League, Major League Pickleball, etc."
            desc2="Stay tuned for announcements."
          />
        </div>
      </div>
    </>
  );
};

export default Boxes;