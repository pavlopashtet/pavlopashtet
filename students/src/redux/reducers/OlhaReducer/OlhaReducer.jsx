import { OlhaReducerTypes } from "./OlhaReducerType";

const initialState = {
  items: {},
  error: null,
  loading: true,
};

export const OlhaReducer = (state = initialState, action) => {
  switch (action.type) {
    case OlhaReducerTypes.ADDING:
      return {
        ...state,
        items: action.data,
      };
    case OlhaReducerTypes.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case OlhaReducerTypes.ERROR:
      return {
        ...state,
        error: action.error,
      };
      case OlhaReducerTypes.MORE_ADDING:
        return {
          ...state,
          items: {
            info: action.data.info,
            results: [
              ...state.items.results,
              ...action.data.results
            ]
          }
        };
    default:
      return state;
  }
};
