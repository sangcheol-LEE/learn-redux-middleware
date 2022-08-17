import { combineReducers } from "redux";
import counterReducer from "./counter";
import sampleReducer from "./sample";
import samplesReducer from "./samples";

const rootReducer = combineReducers({
  counterReducer,
  // sampleReducer,
  samplesReducer
})

export default rootReducer