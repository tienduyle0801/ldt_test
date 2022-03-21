import { createStore } from "redux";
import rootReducer from "../reducers";

const configStore = () => {
  return createStore(rootReducer);
};
export default configStore;
