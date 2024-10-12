const ns = "http://www.w3.org/2000/svg"

function attr(el, arr) {
    for (let p in arr) {
        let pair = arr[p];
        let attrKey = pair[0];
        let attrValue = pair[1];
        el.setAttribute(attrKey, attrValue);

    }
}
function box() {
    return document.createElementNS(ns, "rect");

}
function cir() {
    return document.createElementNS(ns, "circle");
}
function defs() {
    return document.createElementNS(ns, "defs");
}
function line() {
    return document.createElementNS(ns, "line")
}

function niceMax(arr, step = 10) {
    if (arr.length === 0){
        return console.error("Array input must have at least one element")
    }
    let x = Math.max(...arr);
    if (x % step === 0) {
        return x;
    }

    let nm = x;
    while (nm % step !== 0) {
        nm += 1;
        console.log(nm);
    }
    return nm;

};
function niceMin(arr, step = 10) {
    if (arr.length === 0){
        return console.error("Array input must have at least one element")
    }
    let x = Math.min(...arr)
    if (x % step === 0) {
        return x;
    }

    let nm = x;
    while (nm % step !== 0) {
        nm -= 1;
        console.log(nm);
    }
    return nm;
}
function optionMap(els, ops) {
    if (els.length === 0 || ops.length === 0){
        return console.error("optionMap inputs must have at least one element each")
    }
    if (ops.length > els.length) {
        return ops.slice(0, els.length);
    }
    return optionMap(els, [...ops, ...ops]);
};

function quotient(x) {
    if (x === 0){
        console.warn("The requested function would always return zero")
    }
    return function (y) {
        if (y === 0){
            return console.error('Cannot divide by zero.')
        }
        return x / y;
    };
};

function scale(scale) {
    return function (m) {
        return scale * m;
    };
};
function sumAll(arr) {
    return arr.reduce((a, b) => a + b)
};
function vector() {
    return document.createElementNS(ns, "svg");
}

module.exports = {attr, box, cir, defs, line, niceMax, niceMin, optionMap, quotient, scale, sumAll, vector}
