import React from "react";
import Bottles from "./Bottles";
import { Products } from "../../global/state";
import BottleRow from "./BottleRow";

function BottlesShelf() {
  const productKeys = Object.keys(Products);
  return (
    <div className="h-full flex items-center justify-center border-graytheme-light border-l-[14px] w-[90%] z-10 rounded-lg">
      <div className="w-full h-full mt-[24px] flex flex-col">
        {productKeys.map((Shelf, index) => (
          <BottleRow key={Shelf} Shelf={Shelf} row={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default BottlesShelf;
