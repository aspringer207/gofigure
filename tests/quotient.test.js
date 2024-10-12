const { quotient } = require("./functions.cjs")

// Function returns a function when called with a non-zero x
it('should return a function when called with a non-zero x', () => {
    const result = quotient(5);
    expect(typeof result).toBe('function');
});

// x is zero, should log a warning
it('should log a warning when x is zero', () => {
    console.warn = jest.fn();
    quotient(0);
    expect(console.warn).toHaveBeenCalledWith("The requested function would always return zero");
});

// Inner function returns correct quotient for non-zero y
it('should return correct quotient when y is non-zero', () => {
    const divideByFive = quotient(10);
    const result = divideByFive(2);
    expect(result).toBe(5);
});

// Correct division result for positive x and y
it('should return correct division result for positive x and y', () => {
    const result = quotient(10)(2);
    expect(result).toBe(5);
});