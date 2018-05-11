import reducer, { initialState } from './reducer';

const state = {
  bingoCards: {
    0: [],
    1: [],
    2: [],
    3: [],
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

test('initialState', () => {
  expect(initialState).toEqual(state.bingoCards);
});

test('populated state', () => {
  const populatedBingoCards = [
    [1, 5, 7, 8, 3, 9, 12, 29, 30],
    [11, 51, 71, 81, 31, 91, 2, 9, 3],
    [21, 31, 41, 11, 51, 92, 22, 9, 13],
    [1, 14, 43, 21, 15, 29, 64, 73, 31],
  ];

  expect(
    reducer(initialState, {
      type: 'POPULATE_CARDS_SUCCESS',
      payload: populatedBingoCards,
    })
  ).toEqual({
    0: [1, 5, 7, 8, 3, 9, 12, 29, 30],
    1: [11, 51, 71, 81, 31, 91, 2, 9, 3],
    2: [21, 31, 41, 11, 51, 92, 22, 9, 13],
    3: [1, 14, 43, 21, 15, 29, 64, 73, 31],
  });
});
