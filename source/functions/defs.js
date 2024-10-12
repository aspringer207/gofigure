import { ns } from "../expressions/globals.js";

export default function defs() {
    return document.createElementNS(ns, "defs");
}
