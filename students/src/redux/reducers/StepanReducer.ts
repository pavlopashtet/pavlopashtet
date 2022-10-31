import {StepanInitialSate, StepanReducerActionTypes, StepanUserActions} from "../../pages/StepanRudiak/typesSR";

const initialState:StepanInitialSate = { characters: [], error: null, loading: true, info: {next: ''} }

const StepanReducer = (state = initialState, action: StepanUserActions):StepanInitialSate => {
  switch (action.type) {
    case StepanReducerActionTypes.GET_CHARACTERS_INIT:
      return {
        ...state,
        characters: action.payload
      }
    case StepanReducerActionTypes.SET_INFO:
      return {
        ...state,
        info: action.payload
      }
    case StepanReducerActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case StepanReducerActionTypes.GET_MORE_CHARACTERS :
      return {
        ...state,
        characters: [
          ...state.characters,
          ...action.payload
        ]
      }
    default:
      return state
  }
};
export default StepanReducer;