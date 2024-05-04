import React, { useEffect, useState } from "react";
import { Products } from "../../global/state";

import { useBuy, useDisplay, displayIddle } from "../../global/globalState";
import { useSpring, animated } from "@react-spring/web";
import { machineSettings } from "../../global/state";

function CustomButton({ content, img, imgAlt }) {
  const [isClicked, setIsClicked] = useState(false);
  const [bottle, setBottle] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [productsAvailable, setProductAvailable] = useState(Products);

  const bottleFall = displayIddle((state) => state.isBottleFall);
  const setBottleFall = displayIddle((state) => state.setBottleFall);

  const display = useDisplay((state) => state.display);
  const setBottleCode = useBuy((state) => state.setBottleCode);
  const setDisplay = useDisplay((state) => state.setDisplay);
  const clearDisplay = useDisplay((state) => state.clearDisplay);
  const setBuy = useBuy((state) => state.setBuy);
  const setScreen = useDisplay((state) => state.setScreen);

  const setMachineIddle = displayIddle((state) => state.setMachineIddle);
  const drawer = useBuy((state) => state.drawer);

  const availableRows = machineSettings.availableRows;
  const availableColumns = machineSettings.availableColumns;

  const springProps = useSpring({
    transform: `translate(${isClicked ? 500 : 0}px, ${isClicked ? 500 : 0}px)`,
    config: { duration: 100 },
  });

  const handleClick = async () => {
    if (disabled || drawer || bottleFall) return;
    const audio = new Audio("/button.mp3");
    audio.play();

    setIsClicked(true);
    setDisabled(true);

    if (content) {
      setDisplay(content);
      setMachineIddle(false);
    } else {
      if (imgAlt === "confirm") {
        handleSubmit();
      } else {
        clearDisplay();
        setScreen({});
        setMachineIddle(true);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 50));
    setIsClicked(false);
    await new Promise((resolve) => setTimeout(resolve, 200));
    setDisabled(false);
  };

  const handleSubmit = async () => {
    if (display.length === 2) {
      if (Products[display[0]][parseInt(display[1] - 1)]) {
        setBottle(Products[`${display[0]}`][`${parseInt(display[1] - 1)}`]);
        handleBuy();
        clearDisplay();
        setMachineIddle(false);
        setBottleFall(true);
      } else {
        clearDisplay();
        setMachineIddle(true);
      }
    } else {
      clearDisplay();
      setMachineIddle(true);
    }
  };

  useEffect(() => {
    if (drawer === false) {
      setBottleFall(false);
    }
  }, [drawer]);

  useEffect(() => {
    const updatedProducts = {};
    let i = 0;
    for (let key in Products) {
      if (i < availableRows) {
        updatedProducts[key] = Products[key].map((product, index) => {
          if (index < availableColumns) {
            return product;
          }
          return null;
        });
      }
      i++;
    }
    setProductAvailable(updatedProducts);
  }, []);

  useEffect(() => {
    setScreen({ code: display, name: "", price: "" });
    if (display.length === 2) {
      try {
        if (productsAvailable[display[0]][parseInt(display[1] - 1)]) {
          if (productsAvailable[display[0]][parseInt(display[1] - 1)].name) {
            setScreen(
              productsAvailable[`${display[0]}`][`${parseInt(display[1] - 1)}`]
            );
          } else {
            clearDisplay();
            setMachineIddle(true);
            return;
          }
          setMachineIddle(false);
        } else {
          clearDisplay();
          setMachineIddle(true);
        }
      } catch (error) {
        clearDisplay();
        setMachineIddle(true);
      }
    }
  }, [display]);

  const handleBuy = () => {
    setBuy(true);
    setBottleCode(display);
    setBottle(bottle);
    clearDisplay();
    setMachineIddle(false);
  };

  return (
    <button
      disabled={disabled || bottleFall}
      onClick={handleClick}
      className="flex items-center justify-center"
    >
      <div className="relative flex items-center justify-center">
        <animated.div
          style={springProps}
          className="w-8 z-10 h-8 flex items-center justify-center bg-graytheme-light text-graytheme-default p-3 rounded-md cursor-pointer shadow-lg hover:shadow-xl transition duration-300 ease-in-out hover:bg-graytheme-default hover:text-graytheme-light"
        >
          <div className="p-[0.2px]">
            {content ? content : <img src={img} alt="button" />}
          </div>
        </animated.div>
        <div className="w-full h-full absolute z-0 rounded-md bg-graytheme-button left-[4px] top-[2px]"></div>
      </div>
    </button>
  );
}

export default CustomButton;
