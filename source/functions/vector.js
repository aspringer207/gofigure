import { ns } from "./ns";

export function vector() {
    return document.createElementNS(ns, "svg");
}
