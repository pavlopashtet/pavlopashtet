import { combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import charactersReducer from "./reducers/charactersReducer";

const rootReducer = combineReducers({
    characters: charactersReducer,
    // iryna: irynaReducer,

})


const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers());

export default store