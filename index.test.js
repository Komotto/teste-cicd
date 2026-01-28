const soma = require('./index');

test('soma 2 + 3 deve dar 5', () => {
  expect(soma(2, 3)).toBe(5);
});

