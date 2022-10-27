import {StepanReducerActionTypes} from "../reducers/StepanReducer";
import {loadData} from "../../api/apiCalls";
const StepanActions = {
  addCharactersOnInit: (data) => ({
    type: StepanReducerActionTypes.ADD_CHARACTERS_ON_INIT,
    data,
  }),
  addInfo: (info) => ({
    type: StepanReducerActionTypes.ADD_INFO,
    info,
  }),
  setLoading: (loading) => ({
    type: StepanReducerActionTypes.LOADING,
    loading,
  }),
  addCharacters: (data) => ({
    type: StepanReducerActionTypes.ADD_CHARACTERS,
    data,
  }),
}
export const stepGetCharactersOnInit = () => (dispatch) => {
  dispatch(StepanActions.setLoading(true))
  setTimeout(() => {
    loadData('https://rickandmortyapi.com/api/character?page=40')
      .then(response => {
        dispatch(StepanActions.addCharactersOnInit(response.data.results))
        dispatch(StepanActions.addInfo(response.data.info))
      })
      .catch(err => console.log(err))
      .finally(() => dispatch(StepanActions.setLoading(false)))
  }, 2000)
}
export const stepGetMoreCharacters = (next) => (dispatch) => {
  loadData(next)
    .then(response => {
      dispatch(StepanActions.addCharacters(response.data.results))
      dispatch(StepanActions.addInfo(response.data.info))
    })
    .catch(err => console.log(err))
}