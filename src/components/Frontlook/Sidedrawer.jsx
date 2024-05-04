import React, { useEffect } from "react";
import { useDisplay, displayIddle, useBuy } from "../../global/globalState";
import Keypad from "./Keypad";
import { machineSettings } from "../../global/state";

function Sidedrawer({ appliedScaling }) {
  const display = useDisplay((state) => state.display);
  const screen = useDisplay((state) => state.screen);
  // console.log("screen", screen);
  const isMachineIddle = displayIddle((state) => state.isMachineIddle);
  const drawer = useBuy((state) => state.drawer);
  const setMachineIddle = displayIddle((state) => state.setMachineIddle);
  const drawerColor = machineSettings.drawerColor;
  const drawerLogo = machineSettings.drawerLogo;

  const screenTailwind =
    screen.length <= 2
      ? "text-3xl text-slate-50"
      : "text-xl text-slate-50 text-center";

  useEffect(() => {
    if (!drawer) setMachineIddle(true);
  }, [drawer]);
  return (
    <div
      id="numberpadcontainer"
      style={{
        boxShadow:
          "inset -5px 0 5px rgba(150, 150, 150, 1), inset 5px 0 5px rgba(150, 150, 150, 1), inset 0 1000px 1000px rgba(0, 0, 0, 1)",
      }}
      className="flex flex-1  flex-col items-center w-[40%] h-full border-r-graytheme-light border-r-[22px]"
    >
      <div className="h-[10%]"></div>
      <div className="flex-1 flex flex-col items-center gap-5 w-full">
        <div className="w-[90%] h-[10%] flex flex-col items-center justify-center gap-4">
          <div
            style={{ backgroundColor: drawerColor }}
            className="flex h-1/2 w-[80%] rounded-lg items-center justify-center"
          >
            <img
              src={drawerLogo}
              alt="logo"
              className="w-[80%] h-[40%] object-fill"
            />
          </div>
          <div
            style={{
              fontFamily: "LedFont",
              boxShadow: "inset 0 5px 5px 5px rgba(0, 0, 0, 0.4)",
            }}
            className="border-8 overflow-hidden border-slate-600 flex flex-col h-24 w-4/5 bg-slate-800 rounded-lg items-center justify-center "
          >
            {isMachineIddle ? (
              <marquee
                className={screenTailwind}
                behavior="scroll"
                direction="left"
                style={{
                  transform: `scale(${1 / appliedScaling})`,
                }}
              >
                please input
              </marquee>
            ) : screen?.code === "Pickup the item" ? (
              <marquee
                className={screenTailwind}
                behavior="scroll"
                direction="left"
                style={{
                  transform: `scale(${1 / appliedScaling})`,
                }}
              >
                {screen.code}
              </marquee>
            ) : (
              <p
                style={{
                  transform: `scale(${1 / appliedScaling})`,
                }}
                className={screenTailwind}
              >
                {screen.code}
              </p>
            )}

            {screen.price && (
              <>
                <marquee
                  style={{
                    transform: `scale(${1 / appliedScaling})`,
                  }}
                  behavior="scroll"
                  direction="left"
                  className="text-lg text-slate-50"
                >
                  {screen.name}
                </marquee>

                <p
                  style={{
                    transform: `scale(${1 / appliedScaling})`,
                  }}
                  className={screenTailwind}
                >
                  <span>&euro;</span> {screen.price}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center border-t-[19px] border-graytheme-light">
          <Keypad />
        </div>
      </div>
    </div>
  );
}

export default Sidedrawer;
