export const initialState = {
  isBingo: false,
  error: '',
};

export default (state, action) => {
  switch (action.type) {
    case 'CHECK_BINGO_SUCCESS': {
      const isBingo = action.payload;

      return {
        ...state,
        isBingo,
      };
    }

    case 'CHECK_BINGO_FAILURE': {
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
