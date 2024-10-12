
export default function niceMax(arr, step = 10) {
    if (arr.length === 0) {
        return console.error("Array input must have at least one element");
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

}
