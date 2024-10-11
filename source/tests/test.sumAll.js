const { sumAll } = require("./functions.cjs")

    // Returns the correct sum for an array of positive integers
    it('should return the correct sum when given an array of positive integers', () => {
        const result = sumAll([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
      });