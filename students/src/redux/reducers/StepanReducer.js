const initialState = { counter: 0 }
export const StepanReducerActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENT_BY_VALUE: 'INCREMENT_BY_VALUE',
  DECREMENT_BY_VALUE: 'DECREMENT_BY_VALUE'
}
const StepanReducer = (state = initialState, action) => {
  switch (action.type) {
    case StepanReducerActionTypes.INCREMENT:
      return {
        counter: state.counter += 1
      }
    case StepanReducerActionTypes.DECREMENT:
      return {
        counter: state.counter -= 1
      }
    case StepanReducerActionTypes.INCREMENT_BY_VALUE:
      return {
        counter: state.counter += action.data
      }
    case StepanReducerActionTypes.DECREMENT_BY_VALUE:
      return {
        counter: state.counter -= action.data
      }
    default:
      return state
  }
};
export default StepanReducer;