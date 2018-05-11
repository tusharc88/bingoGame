import { selectBingoCards, selectBingoCard } from './selectors';

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
    isBingo: false,
    error: '',
  },
};

test('selectBingoCards', () => {
  expect(selectBingoCards(state)).toEqual({
    0: [1, 5, 7, 8, 3, 9, 12, 29, 30],
    1: [11, 51, 71, 81, 31, 91, 2, 9, 3],
    2: [21, 31, 41, 11, 51, 92, 22, 9, 13],
    3: [1, 14, 43, 21, 15, 29, 64, 73, 31],
  });
});

test('selectBingoCard', () => {
  expect(selectBingoCard(0)(state)).toEqual([1, 5, 7, 8, 3, 9, 12, 29, 30]);
  expect(selectBingoCard(3)(state)).toEqual([
    1,
    14,
    43,
    21,
    15,
    29,
    64,
    73,
    31,
  ]);
});
