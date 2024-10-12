const { attr } = require('./functions.cjs');

    // Sets multiple attributes on an element correctly
    it('should set multiple attributes on an element when given an array of attribute pairs', () => {
      const el = document.createElement('div');
      const attributes = [['id', 'test-id'], ['class', 'test-class']];
      attr(el, attributes);
      expect(el.getAttribute('id')).toBe('test-id');
      expect(el.getAttribute('class')).toBe('test-class');
    });


    