const initialState = { characters: [], error: null, loading: true }
export const StepanReducerActionTypes = {
  ADD_CHARACTERS_ON_INIT: "ADD_CHARACTERS_ON_INIT",
  ADD_INFO: 'ADD_INFO',
  LOADING: "LOADING",
  ADD_CHARACTERS: 'ADD_CHARACTERS',
}
const StepanReducer = (state = initialState, action) => {
  switch (action.type) {
    case StepanReducerActionTypes.ADD_CHARACTERS_ON_INIT:
      return {
        ...state,
        characters: action.data
      }
    case StepanReducerActionTypes.ADD_INFO:
      return {
        ...state,
        info: action.info
      }
    case StepanReducerActionTypes.LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case StepanReducerActionTypes.ADD_CHARACTERS:
      return {
        ...state,
        characters: [
          ...state.characters,
          ...action.data
        ]
      }
    default:
      return state
  }
};
export default StepanReducer;