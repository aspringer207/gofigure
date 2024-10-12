import { ns } from "../expressions/globals";

export default function vector() {
    return document.createElementNS(ns, "svg");
}
