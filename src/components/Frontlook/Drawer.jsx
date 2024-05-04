import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useBuy, useDisplay } from "../../global/globalState";
import { Element, scroller } from "react-scroll";
import { machineSettings } from "../../global/state";
import DrawerSVG from "../svg/DrawerSVG";

function Drawer() {
  const drawer = useBuy((state) => state.drawer);
  const bottle = useBuy((state) => state.bottle);
  const drawerColor = machineSettings.drawerColor;
  const drawerLogo = machineSettings.drawerLogo;
  const [open, setOpen] = useState(false);
  const [fill, setFill] = useState(false);
  const [grab, setGrab] = useState(false);

  const clearBottleCode = useBuy((state) => state.clearBottleCode);
  const clearBuy = useBuy((state) => state.clearBuy);
  const clearbottle = useBuy((state) => state.clearBottle);
  const clearDrawer = useBuy((state) => state.clearDrawer);
  const setScreen = useDisplay((state) => state.setScreen);

  const springPropsDrawer = useSpring({
    transform: `translate(0px, ${open ? 20 : 0}px) rotateX(${
      open ? -20 : 0
    }deg) scale(${open ? 1.05 : 1})`,
    config: { duration: 1000 },
    cursor: `${drawer ? "pointer" : ""}`,
    boxShadow: `0 0 10px 5px ${open ? "#ffffff" : "#000000"}`,
  });

  const glowingDrawer = useSpring({
    boxShadow: `0 0 10px 5px ${open ? "#ffffff" : "#000000"}`,
    config: { duration: 1000 },
  });

  const handleGrab = () => {
    setGrab(true);
    setTimeout(() => {
      clearBottleCode();
      clearBuy();
      clearDrawer();
      clearbottle();
      setOpen(false);
      setGrab(false);
      setFill(false);
      console.log(`You purchased ${bottle.name} for ${bottle.price} Euros`);
      scroller.scrollTo("topOfPage", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 500);
  };

  useEffect(() => {
    if (drawer) {
      setOpen(true);
      const audio = new Audio("/bottle-drawer.mp3");
      audio.play();
      setScreen({ code: "Pickup the item", name: "", price: "" });
      scroller.scrollTo("drawer", {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setTimeout(() => {
        setFill(true);
      }, 1000);
    }
  }, [drawer, bottle]);

  return (
    <animated.div
      style={{ cursor: springPropsDrawer.cursor }}
      onClick={handleGrab}
      className="flex justify-center items-center w-4/5 h-4/5"
    >
      <Element
        name="drawer"
        className="relative w-[496px] h-[196px] bg-graytheme-default flex items-center justify-center rounded-md"
      >
        <div style={{ perspective: "1000px" }} className="w-full h-full">
          <animated.div
            style={{
              ...springPropsDrawer,
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
              backgroundColor: `${drawerColor}`,
            }}
            className="relative w-[496px] h-[196px] rounded-md flex justify-between flex-col items-center p-9"
          >
            <div className="absolute top-[-2px] z-0">
              <DrawerSVG />
            </div>

            <img
              src={drawerLogo}
              alt="logo drawer"
              className="w-full h-full object-fill z-40"
            />
          </animated.div>
        </div>
      </Element>
    </animated.div>
  );
}

export default Drawer;
