const calculateDigit = (digit: number, position: number, isLengthEven: boolean): number => {
  const result = (position % 2 === 0)
    ? isLengthEven ? digit : digit * 2
    : isLengthEven ? digit * 2 : digit;

  return (result > 9) ? result - 9 : result;
};

const applyFormula = (digits: string): number => digits
  .split('')
  .map((digit, index) => calculateDigit(parseInt(digit), index + 1, digits.length % 2 === 0))
  .reduce((previous, current) => previous + current, 0);

export default (digits: string): boolean => (
  digits.length > 0 && applyFormula(digits) % 10 === 0
);
