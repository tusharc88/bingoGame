export const getNextNumber = {
  request: pastNumbers => ({
    type: 'NEXT_NUMBER_REQUEST',
    payload: pastNumbers,
  }),
  success: data => ({
    type: 'NEXT_NUMBER_SUCCESS',
    payload: data,
  }),
  failure: error => ({
    type: 'NEXT_NUMBER_FAILURE',
    error,
  }),
};
