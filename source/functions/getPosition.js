import {positions} from "../expressions/globals"
export default function getPosition(x) {
    return positions[x - 1];
}
