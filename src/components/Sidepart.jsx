import React from "react";
import { machineSettings } from "../global/state";
import Sidedimension from "./svg/Sidedimension";

function Sidepart() {
  const sideMachine = machineSettings.sideMachine;
  const sideLogo = machineSettings.sideLogo;
  return (
    <div className="flex relative items-center justify-center">
      {/* <div
        style={{
          borderLeft: `229px solid ${sideMachine}`,
          borderTop: "180px solid transparent",
          borderBottom: "180px solid transparent",
        }}
        className="h-[1880px] bg-red-8 flex items-center justify-center relative"
      ></div> */}
      <div className="relative">
        <Sidedimension />
      </div>
      <img src={sideLogo} alt="side" className="w-[110px] h-[545px] absolute" />
    </div>
  );
}

export default Sidepart;
