const {cir} = require("./functions.cjs")

it('should create a circle element with the correct namespace', () => {
    const circle = cir();
    expect(circle.namespaceURI).toBe("http://www.w3.org/2000/svg");
    expect(circle.tagName).toBe("circle");
});