import React from "react";
import BottlesShelf from "./BottlesShelf";
import Drawer from "./Drawer";
import Glass from "./Glass";
import Vent from "./Vent";
import { machineSettings } from "../../global/state";

function Shelf() {
  const vent = machineSettings.vent;
  return (
    <div
      style={{
        boxShadow: "inset 5px 0 5px rgba(150, 150, 150, 1)",
      }}
      className="flex flex-col w-[80%] h-[100%] border-x-[22px] border-graytheme-light"
    >
      <div className="flex h-[65%] relative justify-end mt-[33px] ">
        <div className="relative w-[98.8%] bg-graytheme-default flex justify-center items-center">
          <Glass />
          <BottlesShelf />
          <div
            style={{ boxShadow: "inset 0 5px 10px 5px rgba(0, 0, 0, 1)" }}
            className="absolute h-full w-full bg-graytheme-default z-[0]"
          ></div>
        </div>
      </div>
      <div className="flex justify-center h-[35%] items-center flex-1 flex-col">
        <Drawer />
        {vent && <Vent />}
      </div>
    </div>
  );
}

export default Shelf;
