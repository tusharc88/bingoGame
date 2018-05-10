import {
  generateBingoCardNumbers,
  generateUniqueRandomNumber,
  isBingo,
} from './index';

test('generateBingoCardNumbers', () => {
  const bingoCardNumbers = generateBingoCardNumbers(5);
  expect(Object.keys(bingoCardNumbers)).toHaveLength(25);
  expect(
    Object.keys(bingoCardNumbers).every(val => val < 101 && val > 0)
  ).toBeTruthy();
});

test('generateUniqueRandomNumber', () => {
  const mockPastNumbers = {
    1: true,
    8: true,
    4: true,
  };
  const uniqueRandomNumber = generateUniqueRandomNumber(mockPastNumbers);

  expect(uniqueRandomNumber).toBeGreaterThan(1);
  expect(uniqueRandomNumber).toBeLessThanOrEqual(100);
  expect(uniqueRandomNumber).not.toBe(1);
  expect(uniqueRandomNumber).not.toBe(8);
  expect(uniqueRandomNumber).not.toBe(4);
});

test('isBingo', () => {
  const mockPastNumbers = {
    1: true,
    8: true,
    4: true,
  };

  const mockBingoCardNumbersOne = {
    1: true,
    4: true,
  };

  const mockBingoCardNumbersTwo = {
    1: true,
    9: true,
  };

  expect(isBingo(mockPastNumbers, mockBingoCardNumbersOne)).toBeTruthy();
  expect(isBingo(mockPastNumbers, mockBingoCardNumbersTwo)).toBeFalsy();
});
