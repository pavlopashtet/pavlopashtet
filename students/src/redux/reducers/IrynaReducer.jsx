import { IrynaReducerTypes } from "./IrynaReducerTypes";

const initialState = {
  items: {},
  error: null,
  loading: false,
};

export const IrynaReducer = (state = initialState, action) => {
  switch (action.type) {
    case IrynaReducerTypes.ADDING:
      return {
        ...state,
        items: action.data,
      };
    case IrynaReducerTypes.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case IrynaReducerTypes.ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
