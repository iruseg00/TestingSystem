import {
	MDT_TEST_REQUEST,
	MDT_TEST_SUCCESS,
	MDT_TEST_FAILED,
	MDT_TEST_GET_RESULTS,
} from '../actionsTypes/mdtTest';

const initialState = {
	loading: false,
	questions: [],
	results: {},
	message: '',
};

export default function usersReducer(state = initialState, action) {
	const newState = { ...state };
	switch (action.type) {
		case MDT_TEST_REQUEST:
			newState.loading = true;
			return newState;
		case MDT_TEST_SUCCESS:
			newState.loading = false;
			newState.questions = action.payload;
			return newState;
		case MDT_TEST_FAILED:
			newState.loading = false;
			newState.message = action.payload;
			return newState;
		case MDT_TEST_GET_RESULTS:
			newState.loading = false;
			newState.results = action.payload;
			return newState;
		default:
			return state;
	}
}
