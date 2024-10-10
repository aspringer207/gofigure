export default function optionMap(els, ops){
    if (ops.length > els.length){
        return ops.slice(0, els.length);
    }
    return optionMap(els, [...ops, ...ops]);
}