import { create } from "zustand";

export const useBuy = create((set) => ({
  buy: false,
  bottleCode: "",
  bottle: {},
  drawer: false,
  setBottleCode: (bottleCode) => set({ bottleCode }),
  setBottle: (bottle) => set({ bottle }),
  setBuy: (buy) => set({ buy }),
  setDrawer: (drawer) => set({ drawer }),
  clearBottleCode: () => set({ bottleCode: "" }),
  clearBuy: () => set({ buy: false }),
  clearBottle: () => set({ bottle: {} }),
  clearDrawer: () => set({ drawer: false }),
}));

export const useDisplay = create((set) => ({
  display: "",
  screen: {},
  setDisplay: (display) =>
    set((state) => {
      if (state.display.length < 2) {
        return { display: state.display + display };
      } else
        return {
          display: state.display,
        };
    }),
  setScreen: (screen) => set({ screen }),
  clearDisplay: () => set({ display: "" }),
}));

export const displayIddle = create((set) => ({
  isMachineIddle: true,
  isBottleFall: false,
  setBottleFall: (isBottleFall) => set({ isBottleFall }),
  setMachineIddle: (isMachineIddle) => set({ isMachineIddle }),
}));
