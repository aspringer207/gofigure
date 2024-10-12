const {cir} = require("./functions.cjs");

    // Creates an SVG circle element using the correct namespace
    it('should create an SVG circle element with the correct namespace', () => {
        const circle = cir();
        expect(circle.namespaceURI).toBe("http://www.w3.org/2000/svg");
        expect(circle.tagName).toBe("circle");
      });

          // Returns a DOM element of type 'circle'
    it('should create an SVG circle element with the correct namespace', () => {
        const circle = cir();
        expect(circle.namespaceURI).toBe("http://www.w3.org/2000/svg");
        expect(circle.tagName).toBe("circle");
    });