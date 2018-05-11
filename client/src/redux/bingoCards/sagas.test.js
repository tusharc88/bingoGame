import { takeEvery } from 'redux-saga/effects';
import { watchPopulateCards, populateBingoCards } from './sagas';

test('populateBingoCards', () => {
  const generator = populateBingoCards();
  const dummyEmptyCards = {
    0: [],
    1: [],
    2: [],
    3: [],
  };

  const dummyFilledCards = [
    [1, 5, 7, 8, 3, 9, 12, 29, 30],
    [11, 51, 71, 81, 31, 91, 2, 9, 3],
    [21, 31, 41, 11, 51, 92, 22, 9, 13],
    [1, 14, 43, 21, 15, 29, 64, 73, 31],
  ];

  expect(generator.next().value).toMatchSnapshot();
  expect(generator.next(dummyEmptyCards).value.ALL[0]).toHaveLength(25);
  expect(generator.next(dummyFilledCards).value.PUT.action.payload).toEqual([
    [1, 5, 7, 8, 3, 9, 12, 29, 30],
    [11, 51, 71, 81, 31, 91, 2, 9, 3],
    [21, 31, 41, 11, 51, 92, 22, 9, 13],
    [1, 14, 43, 21, 15, 29, 64, 73, 31],
  ]);
});

test('watchPopulateCards', () => {
  const generator = watchPopulateCards();
  expect(generator.next().value).toEqual(
    takeEvery('POPULATE_CARDS_REQUEST', populateBingoCards)
  );
});
