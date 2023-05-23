const { expect } = require('chai');
const { max } = require('../src/');

describe('Exercise 4: max testing', () => {
  it('evaluate max - first case', () => {
    const expectedMax = 4;
    expect(expectedMax).to.equal(max([1, 2, 3, 4]));
  });

  it('evaluate max - second case', () => {
    const expectedMax = 85;
    expect(expectedMax).to.equal(max([63, 85, 39, 24, 3]));
  });

  it('evaluate max - third case', () => {
    const expectedMax = 0;
    expect(expectedMax).to.equal(max([]));
  });
});
