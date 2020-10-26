const functions = require('./functions');

test('should output correct sum', () => {
  expect(functions.add(2, 2)).toBe(4);
});
