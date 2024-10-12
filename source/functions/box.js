import { ns } from "./ns.js";


export function box() {
    return document.createElementNS(ns, "rect");

}
