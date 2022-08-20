import { combineReducers } from "redux";
import counterReducer from "./counter";
import getDataReducer from "./getData";

const rootReducer = combineReducers({
  counterReducer,
  getDataReducer
})

export default rootReducer