import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import charactersReducer from "./reducers/charactersReducer";
import thunk from "redux-thunk";
import { IrynaReducer } from "./reducers/IrynaReducer";
import {nKoziarReducer} from "./reducers/nKoziarReducer/nKoziarReducer"
import rickAndMorty from "./reducers/rickAndMorty";
import StepanReducer from "./reducers/StepanReducer";
import AndrewReducer from "./reducers/AndrewReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  Iryna: IrynaReducer,
  rickAndMorty,
  Stepan: StepanReducer,
  NataliaKoziar:nKoziarReducer
  Andrew: AndrewReducer,
});

export type AppStateType = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
