const { expect } = require('chai');
const { persona } = require('../src/');

describe('Exercise 3: persona testing', () => {
  it('evaluate persona - first case', () => {
    const expectedResult = 20.061728395061728;
    expect(expectedResult).to.equal(persona.bmi());
  });

  it('evaluate persona - second case', () => {
    persona.peso = 75;
    persona.estatura = 1.75;
    const expectedResult = 24.489795918367346;
    expect(expectedResult).to.equal(persona.bmi());
  });

});
