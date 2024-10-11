const {optionMap} = require("./functions.cjs")

// When ops is shorter than els, ops should be doubled and the function called recursively
it('should double ops and call recursively when ops is shorter than els', () => {
    const els = [1, 2, 3, 4];
    const ops = [5, 6];
    const result = optionMap(els, ops);
    expect(result).toEqual([5, 6, 5, 6]);
});

// When els is an empty array, the function should return an empty array
it('should return an empty array when els is empty', () => {
    const els = [];
    const ops = [1, 2, 3];
    const result = optionMap(els, ops);
    expect(result).toEqual([]);
});

// When ops is longer than els, ops should be sliced to match the length of els
it('should slice ops to match els length when ops is longer', () => {
    const els = [1, 2, 3];
    const ops = [4, 5, 6, 7];
    const result = optionMap(els, ops);
    expect(result).toEqual([4, 5, 6]);
});
