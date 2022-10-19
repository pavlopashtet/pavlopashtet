import { IrynaReducerTypes } from "../reducers/IrynaReducerTypes";

export const IrynaAction = {
  adding: (data) => ({ type: IrynaReducerTypes.ADDING, data }),
  more_adding: (data) => ({ type: IrynaReducerTypes.MORE_ADDING, data }),
  loading: (loading) => ({ type: IrynaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: IrynaReducerTypes.ERROR, error }),
};
