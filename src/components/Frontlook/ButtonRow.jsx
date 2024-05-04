import React from "react";
import Button from "../ui/CustomButton";
import { ButtonContents } from "../../global/state";

function ButtonRow({ buttonkey }) {
  return (
    <div className="flex flex-1 gap-3 flex-row w-full items-center justify-center">
      {ButtonContents[`${buttonkey}`].map((button, index) => {
        return <Button key={index} content={button} />;
      })}
    </div>
  );
}

export default ButtonRow;
