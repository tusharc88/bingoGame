export const initialState = {
  numbers: [],
  error: '',
};

export default (state, action) => {
  switch (action.type) {
    case 'NEXT_NUMBER_SUCCESS': {
      const uniqueRandomNumber = action.payload;
      return {
        ...state,
        numbers: [uniqueRandomNumber, ...state.numbers],
      };
    }

    case 'NEXT_NUMBER_FAILURE': {
      const { error } = action;

      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
};
