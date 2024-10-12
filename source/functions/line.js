import { ns } from "../expressions/globals";

export default function line() {
    return document.createElementNS(ns, "line");
}
