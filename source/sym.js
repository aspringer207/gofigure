import { ns } from "./ns";

export default function sym(c) {
    const s = document.createElementNS(ns, "symbol");
    s.appendChild(c)
    return s
}
