import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import ThunkMiddleware from "redux-thunk";

const configStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(ThunkMiddleware));
};
export default configStore;
