
export function attr(el, arr) {
    for (let p in arr) {
        let pair = arr[p];
        let attrKey = pair[0];
        let attrValue = pair[1];
        el.setAttribute(attrKey, attrValue);

    }
}
