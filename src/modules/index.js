import { combineReducers } from "redux";
import counterReducer from "./counter";
import sampleReducer from "./sample";

const rootReducer = combineReducers({
  counterReducer,
  sampleReducer
})

export default rootReducer