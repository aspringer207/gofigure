const { attr } = require('./functions.cjs')
// Function correctly sets multiple attributes on a DOM element
    it('should set multiple attributes on a DOM element when given an array of attribute pairs', () => {
        document.body.innerHTML = '<div id="testElement"></div>';
        const el = document.getElementById('testElement');
        const attributes = [['class', 'test-class'], ['data-test', 'test-data']];
    
        attr(el, attributes);
    
        expect(el.getAttribute('class')).toBe('test-class');
        expect(el.getAttribute('data-test')).toBe('test-data');
      });