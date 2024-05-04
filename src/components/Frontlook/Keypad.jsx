import React from "react";
import Button from "../ui/CustomButton";
import { ButtonContents } from "../../global/state";
import cancel from "../../assets/cancel.svg";
import confirm from "../../assets/confirm.svg";
import ButtonRow from "./ButtonRow";

function Keypad() {
  const ButtonContentsKey = Object.keys(ButtonContents);
  return (
    <div id="numberpad" className="w-[60%] h-full flex mt-5 flex-col gap-4 flex-1">
      {ButtonContentsKey.map((buttonkey) => (
        <ButtonRow key={buttonkey} buttonkey={buttonkey} />
      ))}
      <div className="flex justify-center flex-1 gap-5 items-center w-full">
        <Button img={cancel} imgAlt="cancel" />
        <Button img={confirm} imgAlt="confirm" />
      </div>
    </div>
  );
}

export default Keypad;
