const { line } = require("./functions.cjs")

    // Creates an SVG line element using the correct namespace
    it('should create an SVG line element with the correct namespace', () => {
      const element = line();
      expect(element.namespaceURI).toBe("http://www.w3.org/2000/svg");
      expect(element.tagName).toBe("line");
    });

        // Returns a valid DOM element that can be appended to the document
        it('should create an SVG line element with the correct namespace', () => {
          const element = line();
          expect(element.namespaceURI).toBe("http://www.w3.org/2000/svg");
          expect(element.tagName).toBe("line");
      });