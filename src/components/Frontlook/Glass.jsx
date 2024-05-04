import React from "react";
import reflection from "../../assets/reflection.svg";

function Glass() {
  return (
    <div className="h-full w-full z-30 absolute bg-gradient-to-tr from-slate-900 to-slate-400 opacity-40 backdrop-blur-md">
      <img src={reflection} alt="reflection" className="w-full h-full" />
    </div>
  );
}

export default Glass;
