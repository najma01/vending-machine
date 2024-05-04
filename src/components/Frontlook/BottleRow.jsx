import React from "react";
import { Products } from "../../global/state";
import Bottles from "./Bottles";

function BottleRow({ Shelf, row }) {
  const lengthofArray = Array.from({length: 1})
  return (
    <div className="flex relative justify-evenly flex-1 h-[80%]">
      {Products[`${Shelf}`].map((bottle, index) => (  
        <>
          <p key={index} className="z-50 absolute top-[50%] left-[-35px] text-white">{Shelf}</p>
        <Bottles
          key={Shelf + (index + 1)}
          value={Shelf + (index + 1)}
          bottle={bottle}
          column={index + 1}
          row={row}
        />
        </>
      ))}
    </div>
  );
}

export default BottleRow;
