export const populateCards = {
  request: () => ({ type: 'POPULATE_CARDS_REQUEST' }),
  success: data => ({
    type: 'POPULATE_CARDS_SUCCESS',
    payload: data,
  }),
};
