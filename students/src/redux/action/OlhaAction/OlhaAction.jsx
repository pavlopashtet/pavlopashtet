import { OlhaReducerTypes } from "../../reducers/OlhaReducer/OlhaReducerType";

export const OlhaAction = {
  Set_adding: (data) => ({ type: OlhaReducerTypes.ADDING, data }),
  more_add: (data) => ({ type: OlhaReducerTypes.MORE_ADDING, data }),
  load: (loading) => ({ type: OlhaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: OlhaReducerTypes.ERROR, error }),
};
