import { ns } from "./ns";

export function line() {
    return document.createElementNS(ns, "line");
}
