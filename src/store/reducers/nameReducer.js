const initialState = {
  newValue: ""
};

export const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME": {
      return { ...state, newValue: action.newValue };
    }
    default:
      return state;
  }
};
