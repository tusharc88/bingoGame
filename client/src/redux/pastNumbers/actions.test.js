import { getNextNumber } from './actions';

test('getNextNumber', () => {
  expect(getNextNumber.request([1, 3, 5])).toEqual({
    type: 'NEXT_NUMBER_REQUEST',
    payload: [1, 3, 5],
  });
  expect(getNextNumber.success(1)).toEqual({
    type: 'NEXT_NUMBER_SUCCESS',
    payload: 1,
  });
  expect(getNextNumber.failure('error')).toEqual({
    type: 'NEXT_NUMBER_FAILURE',
    error: 'error',
  });
});
