export default function resolveSpan(spanRange = [0, 100], pct = .75, pos) {
    let totalSpan = spanRange[1] - spanRange[0];
    let innerSpan = totalSpan * pct;
    let whiteSpace = totalSpan - innerSpan;
    let innerPad = whiteSpace / 2;
    if ([0, 1, 2].includes(pos) === false) {
        return console.error('invalid position argument');
    }
    let start = pos === 0 ? spanRange[0] : pos === 1 ? spanRange[0] + innerPad : pos === 2 ? whiteSpace : undefined;
    return [start, innerSpan];
}
