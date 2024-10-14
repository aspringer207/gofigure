function resolveScale(data, max, viewLength) {
    let pct = data / max;
    return pct * viewLength;
}
