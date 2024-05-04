import React from "react";

function Vent() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 z-40 w-full">
      <div
        style={{
          transform: "skewX(-20deg)",
          borderBottom: "30px solid #252525",
          backgroundColor: "#252525",
        }}
        className="w-[90%]"
      ></div>
      <div
        style={{
          transform: "skewX(-20deg)",
          borderBottom: "30px solid #252525",
          backgroundColor: "#252525",
        }}
        className="w-[90%]"
      ></div>
      <div
        style={{
          transform: "skewX(-20deg)",
          borderBottom: "30px solid #252525",
          backgroundColor: "#252525",
        }}
        className="w-[90%]"
      ></div>
    </div>
  );
}

export default Vent;
