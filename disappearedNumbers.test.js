const findDisappearedNumbers = require('./disappearedNumbers');

describe('findDisappearedNumbers', () => {
  it('returns an empty array if input is empty', () => {
    expect(findDisappearedNumbers([])).toEqual([]);
  });

  it('returns the correct result for a given input', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const expectedOutput = [5, 6];
    expect(findDisappearedNumbers(nums)).toEqual(expectedOutput);
  });
});
