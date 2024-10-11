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
    return document.createElementNS("http://www.w3.org/2000/svg", "defs");
}
function line() {
    return document.createElementNS("http://www.w3.org/2000/svg", "line")
}


function niceMax(arr, step = 10) {
    let x = Math.max(...arr);
    if (x % step === 0) {
        return x;
    }

    let nm = Math.ceil(x);
    while (nm % step !== 0) {
        nm += 1;
        console.log(nm);
    }
    return nm;

};
function niceMin(arr, step = 10) {
    let x = Math.min(...arr)
    
    if (x % step === 0) {
        return x;
    }

    let nm = Math.floor(x);
    while (nm % step !== 0) {
        nm -= 1;
        console.log(nm);
    }
    return nm;
}
function optionMap(els, ops) {
    if (ops.length > els.length) {
        return ops.slice(0, els.length);
    }
    return optionMap(els, [...ops, ...ops]);
};

function quotient(x) {
    return function (y) {
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
