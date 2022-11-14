import { OlhaReducerTypes } from "../../reducers/OlhaReducer/OlhaReducerType";

export const OlhaAction = {
  adding: (data) => ({ type: OlhaReducerTypes.ADDING, data }),
  more_adding: (data) => ({ type: OlhaReducerTypes.MORE_ADDING, data }),
  loading: (loading) => ({ type: OlhaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: OlhaReducerTypes.ERROR, error }),
};
