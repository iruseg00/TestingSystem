import {
	AC_TEST_REQUEST,
	AC_TEST_SUCCESS,
	AC_TEST_FAILED,
	AC_TEST_GET_RESULTS,
	AC_TEST_GET_ALL_ANSWERS,
	AC_TEST_GET_TESTINGSYSTEM_TESTS,
} from '../actionsTypes/acTest';

const initialState = {
	loading: false,
	questions: [],
	results: {},
	allAnswers: [],
	testingSystemTests: [],
	message: '',
};

export default function usersReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case AC_TEST_REQUEST:
			newState.loading = true;
			return newState;
		case AC_TEST_SUCCESS:
			newState.loading = false;
			newState.questions = action.payload;
			return newState;
		case AC_TEST_FAILED:
			newState.loading = false;
			newState.message = action.payload;
			return newState;
		case AC_TEST_GET_RESULTS:
			newState.loading = false;
			newState.results = action.payload;
			return newState;
		case AC_TEST_GET_ALL_ANSWERS:
			newState.loading = false;
			newState.allAnswers = action.payload;
			return newState;
		case AC_TEST_GET_TESTINGSYSTEM_TESTS:
			newState.loading = false;
			newState.testingSystemTests = action.payload;
			return newState;
		default:
			return state;
	}
}
