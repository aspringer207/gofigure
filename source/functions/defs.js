import { ns } from "./ns";

export function defs() {
    return document.createElementNS(ns, "defs");
}
