import {
	SUS_TEST_REQUEST,
	SUS_TEST_SUCCESS,
	SUS_TEST_FAILED,
	SUS_TEST_GET_RESULTS,
	SUS_TEST_GET_ALL_ANSWERS,
} from '../actionsTypes/susTest';

const initialState = {
	loading: false,
	questions: [],
	results: {},
	message: '',
};

export default function usersReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case SUS_TEST_REQUEST:
			newState.loading = true;
			return newState;
		case SUS_TEST_SUCCESS:
			newState.loading = false;
			newState.questions = action.payload;
			return newState;
		case SUS_TEST_FAILED:
			newState.loading = false;
			newState.message = action.payload;
			return newState;
		case SUS_TEST_GET_RESULTS || SUS_TEST_GET_ALL_ANSWERS:
			newState.loading = false;
			newState.results = action.payload;
			return newState;
		default:
			return state;
	}
}
