const {quotient} = require("./functions.cjs")

// Returns a function that divides x by y
it('should return a function that divides x by y', () => {
    const divideBy2 = quotient(2);
    expect(divideBy2(4)).toBe(0.5);
});


// Returns a function that can be reused with different y values
it('should return a function that divides x by y when dividing 6 by 2', () => {
    const divideBy6 = quotient(6);
    expect(divideBy6(2)).toBe(3);
    expect(divideBy6(3)).toBe(2);
    expect(divideBy6(0)).toBe(Infinity);
});