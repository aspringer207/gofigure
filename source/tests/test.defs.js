const defs = require("./functions.cjs")

// Creates an SVG 'defs' element successfully
it('should create an SVG "defs" element when called', () => {
    const element = defs();
    expect(element.namespaceURI).toBe("http://www.w3.org/2000/svg");
    expect(element.tagName).toBe("defs");
});