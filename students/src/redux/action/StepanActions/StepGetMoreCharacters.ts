import {Dispatch} from "redux";
import {StepanReducerActionTypes, StepanUserActions} from "../../../pages/StepanRudiak/typesSR";
import axios from "axios";

export const StepGetMoreCharacters = (next: string) => {
  return async (dispatch: Dispatch<StepanUserActions>) => {
    try{
      const response = await axios.get(next)
      dispatch({type: StepanReducerActionTypes.GET_MORE_CHARACTERS, payload: response.data.results})
      dispatch({type: StepanReducerActionTypes.SET_LOADING, payload: false})
      dispatch({type: StepanReducerActionTypes.SET_INFO, payload: response.data.info})
    } catch (err) {
      console.log(err)
    }
  }
}