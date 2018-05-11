import { populateCards } from './actions';

test('populateCards', () => {
  expect(populateCards.request()).toEqual({ type: 'POPULATE_CARDS_REQUEST' });
  expect(populateCards.success([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual({
    type: 'POPULATE_CARDS_SUCCESS',
    payload: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
  });
});
