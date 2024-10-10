import { ns } from "./ns";

export default function box() {
    return document.createElementNS(ns, "rect");

}
