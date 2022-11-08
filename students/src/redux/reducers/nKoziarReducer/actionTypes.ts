
import { Idata } from "./models";

// };
export enum actionTypes {
  ADD_INIT = "ADD_INIT",
  LOADING = "LOADING",
  ADD_MORE = "ADD_MORE",
  REMOVE = "REMOVE",
}
interface AddInitAction{
  type:actionTypes.ADD_INIT;
  data: Idata
}
interface LoadingAction{
  type:actionTypes.LOADING;
  loading:boolean
}
interface AddMoreAction{
  type:actionTypes.ADD_MORE;
  data: Idata
}
interface RemoveAction{
  type:actionTypes.REMOVE;
  id:number
}

export type TypeOfAction = AddInitAction | LoadingAction | AddMoreAction | RemoveAction