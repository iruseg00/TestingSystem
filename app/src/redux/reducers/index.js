import { combineReducers } from 'redux';
import authReducer from './auth';
import usersReducer from './users';
import registrationReducer from './registration';
import susTestReducer from './susTest';
import pssuqTestReducer from './pssuqTest';
import mdtTestReducer from './mdtTest';
import acTestReducer from './acTest';
import { AUTH_LOGOUT_REQUEST } from '../actionsTypes/auth';

const appReducer = combineReducers({
	auth: authReducer,
	users: usersReducer,
	registration: registrationReducer,
	susTest: susTestReducer,
	pssuqTest: pssuqTestReducer,
	mdtTest: mdtTestReducer,
	acTest: acTestReducer,
});

export const rootReducer = (state, action) => {
	action.type === AUTH_LOGOUT_REQUEST && (state = undefined);
	return appReducer(state, action);
};
