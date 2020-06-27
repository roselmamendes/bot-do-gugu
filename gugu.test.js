const gugu = require('./gugu');

test('eu quero um espelho', () => {
  expect(gugu.naMinhaCasa()).toBe('espelho');
});
