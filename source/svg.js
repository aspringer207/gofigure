import { ns } from "./ns";

export default function svg() {
    return document.createElementNS(ns, "svg");
}
