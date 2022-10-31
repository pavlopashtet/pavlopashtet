import {Dispatch} from "redux";
import {StepanReducerActionTypes, StepanUserActions} from "../../../pages/StepanRudiak/typesSR";
import axios from "axios";

export const StepAddCharactersOnInit = () => {
  return async (dispatch: Dispatch<StepanUserActions>) => {
    try{
      const response = await axios.get('https://rickandmortyapi.com/api/character/?page=40')
      dispatch({type: StepanReducerActionTypes.GET_CHARACTERS_INIT, payload: response.data.results})
      dispatch({type: StepanReducerActionTypes.SET_LOADING, payload: false})
      dispatch({type: StepanReducerActionTypes.SET_INFO, payload: response.data.info})
    } catch (err) {
      console.log(err)
    }
  }
}