import { combineReducers } from "redux";
import getShoesReducer from "./getShoesReducer";

const rootReducers = combineReducers({
  getShoesReducer,
});

export default rootReducers;
