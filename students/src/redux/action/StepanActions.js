import {StepanReducerActionTypes} from "../reducers/StepanReducer";

export const StepanActions = {
  increment: () => ({
    type: StepanReducerActionTypes.INCREMENT
  }),
  decrement: () => ({
    type: StepanReducerActionTypes.DECREMENT
  }),
  incrementByVal: (data) => ({
    type: StepanReducerActionTypes.INCREMENT_BY_VALUE,
    data,
  }),
  decrementByVal: (data) => ({
    type: StepanReducerActionTypes.DECREMENT_BY_VALUE,
    data,
  })
}