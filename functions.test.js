const functions = require('./functions');

test('should output correct sum', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('should not output incorrect sum', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('should be null', () => {
  expect(functions.returnNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});


test('user should be Bruce Wayne', () => {
  expect(functions.createUser('Bruce', 'Wayne')).toStrictEqual({
    firstName: 'Bruce',
    lastName: 'Wayne',
  });
});
