import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import charactersReducer from "./reducers/charactersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    characters: charactersReducer,
    // iryna: irynaReducer,

})


const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store