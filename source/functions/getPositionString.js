import { positionStrings } from "../expressions"
export default function getPositionString(x) {
    return positionStrings[x - 1];
}
