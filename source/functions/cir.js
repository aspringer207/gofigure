import { ns } from "./ns.js";


export function cir() {
    return document.createElementNS(ns, "circle");
}
