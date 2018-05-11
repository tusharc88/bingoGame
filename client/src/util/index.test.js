import {
  generateBingoCardNumbers,
  generateUniqueRandomNumber,
  isBingo,
} from './index';

test('generateBingoCardNumbers', () => {
  const bingoCardNumbers = generateBingoCardNumbers(5);
  expect(bingoCardNumbers).toHaveLength(25);
  expect(bingoCardNumbers.every(val => val < 101 && val > 0)).toBeTruthy();
});

test('generateUniqueRandomNumber', () => {
  const mockPastNumbers = [1, 8, 4];
  const uniqueRandomNumber = generateUniqueRandomNumber(mockPastNumbers);

  expect(uniqueRandomNumber).toBeGreaterThan(1);
  expect(uniqueRandomNumber).toBeLessThanOrEqual(100);
  expect(uniqueRandomNumber).not.toBe(1);
  expect(uniqueRandomNumber).not.toBe(8);
  expect(uniqueRandomNumber).not.toBe(4);
});

test('isBingo', () => {
  const mockPastNumbers = [1, 8, 4];

  const mockBingoCardNumbersOne = [1, 4];

  const mockBingoCardNumbersTwo = [1, 9];

  expect(isBingo(mockPastNumbers, mockBingoCardNumbersOne)).toBeTruthy();
  expect(isBingo(mockPastNumbers, mockBingoCardNumbersTwo)).toBeFalsy();
});
