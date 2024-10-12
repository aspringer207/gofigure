const { niceMin } = require ("./functions.cjs")



// Returns the nearest lower multiple of step for positive numbers
it('should return the nearest lower multiple of step when given positive numbers', () => {
    const result = niceMin([23, 45, 67], 10);
    expect(result).toBe(20);
});