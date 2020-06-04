import validate from '../../helpers/validate';

describe('Validate helper', () => {
  it('should be truthy with correct numbers', () => {
    expect(validate('62')).toBeTruthy();
    expect(validate('123')).toBeTruthy();
    expect(validate('222')).toBeTruthy();
    expect(validate('062')).toBeTruthy();
    expect(validate('0123')).toBeTruthy();
    expect(validate('0222')).toBeTruthy();
  });
  
  it('should be falsy with incorrect numbers', () => {
    expect(validate('26')).toBeFalsy();
    expect(validate('111')).toBeFalsy();
    expect(validate('1234')).toBeFalsy();
    expect(validate('026')).toBeFalsy();
    expect(validate('0111')).toBeFalsy();
    expect(validate('01234')).toBeFalsy();
  });

  it('should be falsy for non numeric data', () => {
    expect(validate('sample text')).toBeFalsy();
    expect(validate('123a')).toBeFalsy();
    expect(validate('a123')).toBeFalsy();
    expect(validate('1a23')).toBeFalsy();
  });
})
