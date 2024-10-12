import { ns } from "../expressions/globals.js";


export default function rect() {
    return document.createElementNS(ns, "rect");

}
