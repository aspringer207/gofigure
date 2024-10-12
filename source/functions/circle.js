import { ns } from "../expressions/globals.js";


export default function circle() {
    return document.createElementNS(ns, "circle");
}
