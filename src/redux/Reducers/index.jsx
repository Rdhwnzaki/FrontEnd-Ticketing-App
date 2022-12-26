import { combineReducers } from "redux";
import profileReducer from "./Profile";

const rootReducers = combineReducers({
  profile: profileReducer,
});

export default rootReducers;
