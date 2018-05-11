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
  expect(initialState).toEqual(state.checkBingo);
});

test('isBingo true', () => {
  const isBingoSuccess = true;

  expect(
    reducer(initialState, {
      type: 'CHECK_BINGO_SUCCESS',
      payload: isBingoSuccess,
    })
  ).toEqual({
    isBingo: true,
    error: '',
  });
});
