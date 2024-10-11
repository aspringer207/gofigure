const { line } = require("./functions.cjs")

// Creates an SVG line element successfully
it('should create an SVG line element when called', () => {
    const svgLine = line();
    expect(svgLine).toBeInstanceOf(SVGLineElement);
    expect(svgLine.namespaceURI).toBe("http://www.w3.org/2000/svg");
});