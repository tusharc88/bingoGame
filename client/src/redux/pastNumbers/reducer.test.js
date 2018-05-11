import reducer, { initialState } from './reducer';

const state = {
  bingoCards: {
    0: [],
    1: [],
    2: [],
    3: [],
  },
  pastNumbers: {
    numbers: [1, 5, 7],
    error: '',
  },
  checkBingo: {
    isBingo: false,
    error: '',
  },
};

test('initialState', () => {
  expect(initialState).toEqual({
    numbers: [],
    error: '',
  });
});

test('get unique random numbers', () => {
  const uniqueRandomNumber = 4;

  expect(
    reducer(state.pastNumbers, {
      type: 'NEXT_NUMBER_SUCCESS',
      payload: uniqueRandomNumber,
    })
  ).toEqual({
    numbers: [4, 1, 5, 7],
    error: '',
  });
});
