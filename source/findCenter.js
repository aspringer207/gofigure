export function findCenter(xStart, xEnd, yStart, yEnd) {
    let xPath = xEnd - xStart;
    let yPath = yEnd - yStart;
    let xHalf = xPath / 2;
    let yHalf = yPath / 2;
    let xMid = xStart + xHalf;
    let yMid = yStart + yHalf;
    return [xMid, yMid];

}
