
export function quotient(x) {
    if (x === 0) {
        console.warn("The requested function would always return zero");
    }
    return function (y) {
        if (y === 0) {
            return console.error('Cannot divide by zero.');
        }
        return x / y;
    };
}
