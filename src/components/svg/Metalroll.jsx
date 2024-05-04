import React from "react";
import { machineSettings } from "../../global/state";

function Metalroll() {
  const metalRollingColor = machineSettings.metalRollingColor;
  return (
    <svg
      width="60%"
      height="60%"
      viewBox="0 0 71 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.1163 34.5833C63.1163 52.694 49.3229 67.1667 32.5581 67.1667C15.7933 67.1667 2 52.694 2 34.5833C2 16.4726 15.7933 2 32.5581 2C49.3229 2 63.1163 16.4726 63.1163 34.5833Z"
        stroke={metalRollingColor}
        strokeWidth="4"
      />
      <path
        d="M68.1163 37.5833C68.1163 55.694 54.3229 70.1667 37.5581 70.1667C20.7933 70.1667 7 55.694 7 37.5833C7 19.4726 20.7933 5 37.5581 5C54.3229 5 68.1163 19.4726 68.1163 37.5833Z"
        stroke={metalRollingColor}
        strokeWidth="4"
      />
    </svg>
  );
}

export default Metalroll;
