const { expect } = require('chai');
const { descifrar } = require('../src/');

describe('Exercise 2: descifrar testing', () => {
  it('evaluate decipher - first case', () => {
    expect('hola').to.equal(descifrar('h0l4', { 0: 'o', 4: 'a' }));
  });

  it('evaluate decipher - second case', () => {
    expect('permiso').to.equal(descifrar('pyrmizo', { y: 'e', z: 's' }));
  });

  it('evaluate decipher - third case', () => {
    expect('igual').to.equal(descifrar('igual', { h: 'n' }));
  });
});
