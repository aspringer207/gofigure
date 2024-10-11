const { attr, box, cir, defs, line, niceMax, niceMin, optionMap, quotient, scale, sumAll, vector } = require("./functions.cjs")

it('should set multiple attributes on a DOM element when given an array of attribute pairs', () => {
    document.body.innerHTML = '<div id="testElement"></div>';
    const el = document.getElementById('testElement');
    const attributes = [['class', 'test-class'], ['data-test', 'test-data']];

    attr(el, attributes);

    expect(el.getAttribute('class')).toBe('test-class');
    expect(el.getAttribute('data-test')).toBe('test-data');
});

// Creates an SVG rectangle element successfully
it('should create an SVG rectangle element when called', () => {
    const rect = box();
    expect(rect).toBeInstanceOf(SVGRectElement);
    expect(rect.namespaceURI).toBe("http://www.w3.org/2000/svg");
});







