import { selectIsBingo } from './selectors';

test('selectIsBingo when true', () => {
  const state = {
    bingoCards: {
      0: [1, 5, 7, 8, 3, 9, 12, 29, 30],
      1: [11, 51, 71, 81, 31, 91, 2, 9, 3],
      2: [21, 31, 41, 11, 51, 92, 22, 9, 13],
      3: [1, 14, 43, 21, 15, 29, 64, 73, 31],
    },
    pastNumbers: {
      numbers: [],
      error: '',
    },
    checkBingo: {
      isBingo: true,
      error: '',
    },
  };
  expect(selectIsBingo(state)).toBeTruthy();
});

test('selectIsBingo when false', () => {
  const state = {
    bingoCards: {
      0: [1, 5, 7, 8, 3, 9, 12, 29, 30],
      1: [11, 51, 71, 81, 31, 91, 2, 9, 3],
      2: [21, 31, 41, 11, 51, 92, 22, 9, 13],
      3: [1, 14, 43, 21, 15, 29, 64, 73, 31],
    },
    pastNumbers: [],
    checkBingo: {
      isBingo: false,
      error: '',
    },
  };
  expect(selectIsBingo(state)).toBeFalsy();
});
