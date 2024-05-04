import React, { useEffect, useRef, useState } from "react";
import VendingMachine from "./pages/VendingMachine";
import useWindowSize from "./hooks/useWindowSize";
import "../src/App.css"; 
function App() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [opacity, setOpacity] = useState(0);
  const [padding, setPadding] = useState(isMobile ? 0 : 20);
  const [isHovered, setIsHovered] = useState(undefined);
  const vendingMachineRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const currentIsMobile = window.innerWidth < 768;
      setIsMobile(currentIsMobile);
      setPadding(currentIsMobile ? 0 : 20);

      if (vendingMachineRef.current) {
        const vh = window.innerHeight - padding * 2;
        const vw = window.innerWidth - padding * 2;
        const machineHeight = vendingMachineRef.current.offsetHeight;
        const machineWidth = vendingMachineRef.current.offsetWidth;
        const scaleHeight = vh / machineHeight;
        const scaleWidth = vw / machineWidth;
        const scaleFactor = Math.min(scaleHeight, scaleWidth);
        setScale(scaleFactor);
        setOpacity(1);
      }
    };

    handleResize(); // Call on initial mount to set the initial scale
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      setOpacity(0);
    };
  }, [padding]);

  useEffect(() => {
    const numberPadElement = document.getElementById("numberpad");
    if (!numberPadElement) {
      console.warn('Element with ID "numberpad" not found');
      return;
    }
    const handleMouseEnter = () => setIsHovered(true);
    numberPadElement.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      numberPadElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    const numberPadElement = document.getElementById("numberpadcontainer");
    if (!numberPadElement) {
      console.warn('Element with ID "numberpadcontainer" not found');
      return;
    }

    const handleMouseLeave = (event) => {
      const { clientX } = event;
      const elementRightEdge = numberPadElement.getBoundingClientRect().right;
      if (clientX < elementRightEdge && clientX > elementRightEdge - 50) {
        return;
      }
      setIsHovered(false);
    };
    numberPadElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      numberPadElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const getScaling = ()=>{
 const scaleAmount =  windowinfo?.width > 1000
              ? windowinfo?.width > 1280
                ? 0.8
                : 0.54
              : scale
  return scaleAmount;
  }
  const windowinfo = useWindowSize();
  // console.log("windowinfo",windowinfo)
  return (
    <div
      className="flex justify-end gap-0 w-screen h-screen  overflow-hidden"
      style={{
        padding: `${padding}px`,
        boxSizing: "border-box",
      }}
    >
      <div
        className={isHovered !== undefined ? "duration-700 " : ""}
        style={{
          marginRight: isHovered && windowinfo?.width > 1000 ? "-22px" : "",
          marginTop: isHovered && windowinfo?.width > 1000 ? "-25px" : "",
          transform: `scale(${
            isHovered && windowinfo?.width > 1000
              ? windowinfo?.width > 1280
                ? 0.8
                : 0.54
              : scale
          })`,
          transformOrigin: isMobile ? "top center" : "top right",
          width: "100%",
          height: "100%",
          opacity: opacity,
        }}
      >
        <div ref={vendingMachineRef} className=" duration-300">
          <VendingMachine  appliedScaling = {getScaling()}/>
        </div>
      </div>
    </div>
  );
}

export default App;
