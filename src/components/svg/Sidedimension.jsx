import React from "react";
import { machineSettings } from "../../global/state";

function Sidedimension() {
  const sideMachine = machineSettings.sideMachine;
  const sideMachineGradientBack = machineSettings.sideMachineGradientBack;
  return (
    <svg
      width="170"
      height="1895"
      viewBox="0 0 170 1895"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_14_1510)">
        <path
          d="M4 0L166 153.476V1759.94L4 1887V0Z"
          fill="url(#paint0_linear_14_1510)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_14_1510"
          x="0"
          y="0"
          width="170"
          height="1895"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_14_1510"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_14_1510"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_14_1510"
          x1="2.16733"
          y1="900"
          x2="192.087"
          y2="902.818"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={sideMachine} />
          <stop offset="1" stopColor={sideMachineGradientBack} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Sidedimension;
