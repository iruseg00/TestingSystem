import { combineReducers } from "redux";
import authReducer from "./auth";
import usersReducer from "./users";
import registrationReducer from "./registration";
import { AUTH_LOGOUT_REQUEST } from "../actionsTypes/auth";

const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  registration: registrationReducer,
})

export const rootReducer = (state, action) => {
  action.type === AUTH_LOGOUT_REQUEST && (state = undefined);
  return appReducer(state, action);
}