export enum StepanReducerActionTypes {
  GET_CHARACTERS_INIT= "GET_CHARACTERS_INIT",
  SET_INFO= 'SET_INFO',
  SET_LOADING= "SET_LOADING",
  GET_MORE_CHARACTERS= 'GET_MORE_CHARACTERS',
}
export interface StepanInitialSate {
  characters: any[]
  error: null | string
  loading: boolean
  info: {
    next: string
  }
}
interface GET_CHARACTERS_INIT {
  type: StepanReducerActionTypes.GET_CHARACTERS_INIT
  payload: any[]
}
interface SET_INFO {
  type: StepanReducerActionTypes.SET_INFO
  payload: {
    next: string
  }
}
interface SET_LOADING {
  type: StepanReducerActionTypes.SET_LOADING
  payload: boolean
}
interface GET_MORE_CHARACTERS {
  type: StepanReducerActionTypes.GET_MORE_CHARACTERS
  payload: any[]
}
export type StepanUserActions = GET_CHARACTERS_INIT | SET_INFO | SET_LOADING | GET_MORE_CHARACTERS