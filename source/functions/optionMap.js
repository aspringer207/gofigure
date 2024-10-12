
export function optionMap(els, ops) {
    if (els.length === 0 || ops.length === 0) {
        return console.error("optionMap inputs must have at least one element each");
    }
    if (ops.length > els.length) {
        return ops.slice(0, els.length);
    }
    return optionMap(els, [...ops, ...ops]);
}
