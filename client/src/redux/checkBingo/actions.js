export const isBingo = {
  request: cardNumber => ({ type: 'CHECK_BINGO_REQUEST', payload: cardNumber }),
  success: data => ({
    type: 'CHECK_BINGO_SUCCESS',
    payload: data,
  }),
  failure: error => ({
    type: 'CHECK_BINGO_FAILURE',
    error,
  }),
};
