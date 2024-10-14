import posAll from "./functions/posall";

const positions = posAll();
const positionStrings = positions.map((x)=> x[1]);
const positionNumbers = positions.map((x)=> x[0]);