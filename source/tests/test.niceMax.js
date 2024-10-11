const {niceMax} = require('./functions.cjs')

// Returns the maximum number when it is a multiple of the step
// Adjusts the maximum number to the nearest higher multiple of the step
it('should return the maximum number when it is a multiple of the step', () => {
    const arr = [5, 10, 15, 20];
    const result = niceMax(arr, 5);
    expect(result).toBe(20);
});

it('should return the nearest higher multiple of the step when max is not a multiple', () => {
    const arr = [3, 7, 11, 14];
    const result = niceMax(arr, 5);
    expect(result).toBe(15);
});

it('should handle an empty array by returning 0', () => {
    const arr = [];
    const result = niceMax(arr, 5);
    expect(result).toBe(0);
});

it('should return the maximum number when step is larger than max', () => {
    const arr = [1, 2, 3];
    const result = niceMax(arr, 10);
    expect(result).toBe(10);
});
