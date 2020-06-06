import validate from '../../helpers/validate';

describe('Validate helper', () => {
  it('should be truthy with correct numbers', () => {
    expect(validate('26')).toBeTruthy();
    expect(validate('422')).toBeTruthy();
    expect(validate('026')).toBeTruthy();
    expect(validate('0422')).toBeTruthy();
    expect(validate('4000002760003184')).toBeTruthy();
    expect(validate('4242424242424242')).toBeTruthy();
  });
  
  it('should be falsy with incorrect numbers', () => {
    expect(validate('62')).toBeFalsy();
    expect(validate('111')).toBeFalsy();
    expect(validate('1234')).toBeFalsy();
    expect(validate('321')).toBeFalsy();
    expect(validate('062')).toBeFalsy();
    expect(validate('0111')).toBeFalsy();
    expect(validate('01234')).toBeFalsy();
    expect(validate('2424242424242424')).toBeFalsy();
  });

  it('should be falsy for non numeric data', () => {
    expect(validate('sample text')).toBeFalsy();
    expect(validate('123a')).toBeFalsy();
    expect(validate('a123')).toBeFalsy();
    expect(validate('1a23')).toBeFalsy();
  });
})
