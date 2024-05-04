import React from "react";
import Frontlook from "../components/Frontlook";
import Sidepart from "../components/Sidepart";
import { Element } from "react-scroll";

function VendingMachine({appliedScaling}) {
  return (
    <div className="flex justify-end gap-0 w-full  ">
      <Element name="topOfPage" />
      <Frontlook  appliedScaling={appliedScaling}/>
      <Sidepart />
    </div>
  );
}

export default VendingMachine;
