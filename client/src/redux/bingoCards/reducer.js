export const initialState = {
  0: [],
  1: [],
  2: [],
  3: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POPULATE_CARDS_SUCCESS': {
      const cardsWithNumbers = action.payload;

      return {
        ...state,
        0: cardsWithNumbers[0],
        1: cardsWithNumbers[1],
        2: cardsWithNumbers[2],
        3: cardsWithNumbers[3],
      };
    }
    default:
      return state;
  }
};
