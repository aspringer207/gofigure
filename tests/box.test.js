const { box } = require("./functions.cjs")

    // Create an SVG rectangle element using the specified namespace
    it('should create an SVG rectangle element with the correct namespace', () => {
      const rect = box();
      expect(rect.namespaceURI).toBe("http://www.w3.org/2000/svg");
      expect(rect.tagName).toBe("rect");
    });