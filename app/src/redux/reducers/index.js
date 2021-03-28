import { combineReducers } from "redux";
import authReducer from "./auth";
import usersReducer from "./users";
import registrationReducer from "./registration";

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  registration: registrationReducer,
});