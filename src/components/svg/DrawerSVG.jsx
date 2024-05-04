import React from "react";
import { machineSettings } from "../../global/state";

function Drawer() {
  const drawerColor = machineSettings.drawerColor;
  const drawerSide = machineSettings.drawerSide;
  return (
    <svg
      width="496"
      height="199"
      viewBox="0 0 496 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="3" width="496" height="196" rx="6" fill={drawerColor} />
      <rect x="191" y="3" width="113" height="35" rx="9" fill={drawerSide} />
      <rect y="3" width="496" height="12" rx="6" fill={drawerSide} />
      <rect y="186" width="496" height="12" rx="6" fill={drawerSide} />
      <rect y="4" width="12" height="195" rx="6" fill={drawerSide} />
      <rect x="484" y="3" width="12" height="195" rx="6" fill={drawerSide} />
      <rect x="200" width="96" height="31" rx="3" fill="black" />
    </svg>
  );
}

export default Drawer;
