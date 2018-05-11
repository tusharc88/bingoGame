import { isBingo } from './actions';

test('isBingo', () => {
  expect(isBingo.request(1)).toEqual({
    type: 'CHECK_BINGO_REQUEST',
    payload: 1,
  });
  expect(isBingo.success(true)).toEqual({
    type: 'CHECK_BINGO_SUCCESS',
    payload: true,
  });
  expect(isBingo.failure('error')).toEqual({
    type: 'CHECK_BINGO_FAILURE',
    error: 'error',
  });
});
