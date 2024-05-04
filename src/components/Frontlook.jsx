import React from "react";
import Shelf from "./Frontlook/Shelf";
import Sidedrawer from "./Frontlook/Sidedrawer";
import { machineSettings } from "../global/state";
import Vent from "./Frontlook/Vent";

function Frontlook({appliedScaling}) {
  const vent = machineSettings.vent;
  return (
    <div className="relative flex w-[837px] h-[1884px] bg-black flex-col mt-1">
      <div className="h-[90%] flex ">
        <Shelf />
        <Sidedrawer  appliedScaling={appliedScaling}/>
      </div>
      <div className="h-4 mt-[-4px] z-100 bg-black"></div>
      <div className="mt-5">{vent && <Vent />}</div>
    </div>
  );
}

export default Frontlook;
