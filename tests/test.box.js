const { box } = require("./functions.cjs")
it('should create an SVG rectangle element when called', () => {
    const rect = box();
    expect(rect).toBeInstanceOf(SVGRectElement);
    expect(rect.namespaceURI).toBe("http://www.w3.org/2000/svg");
});
