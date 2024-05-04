import CocaColaSVG from "../assets/bottle-diet.svg";
import DasaniSVG from "../assets/bottle-dasani.svg";
import CokeSVG from "../assets/bottle-coke.svg";
import tinycolor from 'tinycolor2';

export const ButtonContents = {
  1: ["A", "B", "C"],
  2: ["D", "E", "F"],
  3: ["1", "2", "3"],
  4: ["4", "5", "6"],
};

// Input your product details here
const CocaCola = {
  name: "Coca Cola",
  price: 1.5,
  image: CocaColaSVG,
};

const Dasani = {
  name: "Dasani",
  price: 1.5,
  image: DasaniSVG,
};

const Coke = {
  name: "Coke",
  price: 1.5,
  image: CokeSVG,
};

//Key represent Shelf and Index represent the Slot
export const Products = {
  A: [
    {},
    { ...Dasani, stock: 2 },
    { ...Coke, stock: 5 },
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    {},
  ],
  B: [
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
  ],
  C: [
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
  ],
  D: [
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
  ],
  E: [
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
  ],
  F: [
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
    { ...CocaCola, stock: 5 },
    { ...Dasani, stock: 5 },
    { ...Coke, stock: 5 },
  ],
};

function darkenColor(color, amount) {
  const rgb = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  const r = parseInt(rgb[1], 16) - amount;
  const g = parseInt(rgb[2], 16) - amount;
  const b = parseInt(rgb[3], 16) - amount;
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}
// machineSettings
export const machineSettings = {
  drawerColor: "#f80506",
  drawerSide: "",
  drawerLogo: "/drawer.webp",
  metalRollingColor: "#5B5B5B",
  sideLogo: "/side.webp",
  sideMachine: "#f80506",
  sideMachineGradientBack: "#800000",
  availableRows: 5,
  availableColumns: 6,
  vent: true,
};

machineSettings.drawerSide = darkenColor(machineSettings.drawerColor, 80);
