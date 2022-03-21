import { combineReducers } from "redux";
import weightData from "./weight-data";

const State = combineReducers({
  weightData: weightData,
});
export default State;
