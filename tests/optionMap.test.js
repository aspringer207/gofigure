const {optionMap} = require("./functions.cjs")

// When ops is shorter than els, ops should be doubled and the function called recursively
    // Returns error message when either input array is empty
    it('should return an error message when either input array is empty', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        optionMap([], [1, 2, 3]);
        expect(consoleSpy).toHaveBeenCalledWith("optionMap inputs must have at least one element each");
        consoleSpy.mockRestore();
      });

          // Handles els and ops with identical lengths
    it('should return ops unchanged when els and ops have identical lengths', () => {
        const els = [1, 2, 3];
        const ops = ['a', 'b', 'c'];
        const result = optionMap(els, ops);
        expect(result).toEqual(ops);
      });

          // Returns ops sliced to match els length when ops is longer
    it('should return ops sliced to match els length when ops is longer', () => {
        const result = optionMap([1, 2, 3], [4, 5, 6, 7]);
        expect(result).toEqual([4, 5, 6]);
    });

        // Recursively calls itself with doubled ops until ops matches els length
        it('should recursively double ops until it matches els length', () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
            optionMap([], [1, 2, 3]);
            expect(consoleSpy).toHaveBeenCalledWith("optionMap inputs must have at least one element each");
            consoleSpy.mockRestore();
        });