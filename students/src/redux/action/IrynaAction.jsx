import { IrynaReducerTypes } from "../reducers/IrynaReducerTypes";

export const IrynaAction = {
  adding: (data) => ({ type: IrynaReducerTypes.ADDING, data }),
  loading: (loading) => ({ type: IrynaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: IrynaReducerTypes.ERROR, error }),
};
