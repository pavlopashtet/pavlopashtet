import { IrynaReducerTypes } from "../reducers/IrynaReducerTypes";
import { getCharacter, getMore } from "../../pages/Iryna/Axios/apiCall";

export const IrynaAction = {
  adding: (data) => ({ type: IrynaReducerTypes.ADDING, data }),
  more_adding: (data) => ({ type: IrynaReducerTypes.MORE_ADDING, data }),
  loading: (loading) => ({ type: IrynaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: IrynaReducerTypes.ERROR, error }),
};
export const getByThunk = () => async (dispatch) => {
  dispatch(IrynaAction.loading(true))
  await getCharacter()
    .then((data) => {
      dispatch (IrynaAction.adding(data.data))
      dispatch(IrynaAction.error(null))
    })
    .catch((e) => {
      dispatch(IrynaAction.error(e))
    })
    .finally(() => {
      dispatch(IrynaAction.loading(false))
    });
};

export const getMoreByThunk = (url) => async (dispatch) => {
    dispatch(IrynaAction.loading(true))
    await getMore(url)
    .then((data) => {
        dispatch (IrynaAction.more_adding(data.data))
        dispatch(IrynaAction.error(null))
      })
      .catch((e) => {
        dispatch(IrynaAction.error(e))
      })
      .finally(() => {
        dispatch(IrynaAction.loading(false))
      });
   
};
