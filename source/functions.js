export const ns = "http://www.w3.org/2000/svg"

export function attr(el, arr) {
    for (let p in arr) {
        let pair = arr[p];
        let attrKey = pair[0];
        let attrValue = pair[1];
        el.setAttribute(attrKey, attrValue);

    }
}
export function box() {
    return document.createElementNS(ns, "rect");

}
export function cir() {
    return document.createElementNS(ns, "circle");
}
export function defs() {
    return document.createElementNS("http://www.w3.org/2000/svg", "defs");
}
export function findCenter(xStart, xEnd, yStart, yEnd) {
    let xPath = xEnd - xStart;
    let yPath = yEnd - yStart;
    let xHalf = xPath / 2;
    let yHalf = yPath / 2;
    let xMid = xStart + xHalf;
    let yMid = yStart + yHalf;
    return [xMid, yMid];

}

export function niceMax(arr, step = 10){
    let x = Math.max(...arr);
    if(x % step === 0){
        return x;
        }
    
        let nm = x;
        while (nm % step !== 0){
            nm += 1;
            console.log(nm);
        }
        return nm;

};
export function niceMin(arr, step = 10){
    let x = Math.min(...arr)
    if(x % step === 0){
        return x;
        }
    
        let nm = x;
        while (nm % step !== 0){
            nm -= 1;
            console.log(nm);
        }
        return nm;
}
export function optionMap(els, ops){
    if (ops.length > els.length){
        return ops.slice(0, els.length);
    }
    return optionMap(els, [...ops, ...ops]);
};
export function parseArray(arr) {
    const dataValues = arr.map((x) => parseFloat(x));
    const labels = arr.map((x, i) => {
        let reg = `${dataValues[i]}`;
        let extra = x.replace(reg, '');
        return extra.trim();
    });
    return {
        "data": dataValues,
        "labels": labels
    };
};

export function quotient(x) {
    return function (y) {
        return x / y;
    };
};

export function scale(scale){
    return function (m){
        return scale * m;
    };
};
export function setBarOrigin(el) {
    el.setAttribute("transform-origin", "50% 100%");
    el.setAttribute('aspectRatio', "xMidyMax meet");
};
export function sumAll(arr) {
    return arr.reduce((a, b) => a + b)
};
export function sym(c) {
    const s = document.createElementNS(ns, "symbol");
    s.appendChild(c)
    return s
};

export function useEl(idRef) { 
    let template = document.getElementById(idRef);
    const u = document.createElementNS("http://www.w3.org/2000/svg", "use");
    u.setAttribute("href", template);
    return u
}
export function vector() {
    return document.createElementNS(ns, "svg");
}
