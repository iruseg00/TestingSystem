import { getSusQuestions, postSusAnswers } from '../../services/susTest';
import {
	SUS_TEST_REQUEST,
	SUS_TEST_SUCCESS,
	SUS_TEST_FAILED,
	SUS_TEST_GET_RESULTS,
} from '../actionsTypes/susTest';
import { message } from 'antd';

export function getSusTest() {
	return async function (dispatch) {
		dispatch({ type: SUS_TEST_REQUEST });
		const response = await getSusQuestions();
		const ARRAY_OF_SUS_QUESTIONS = response?.data;
		try {
			ARRAY_OF_SUS_QUESTIONS ?? new Error('Failed request.');
			dispatch({ type: SUS_TEST_SUCCESS, payload: ARRAY_OF_SUS_QUESTIONS });
		} catch (err) {
			dispatch({ type: SUS_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getResults(data) {
	return async function (dispatch) {
		dispatch({ type: SUS_TEST_REQUEST });
		const response = await postSusAnswers(data);
		const results = response?.data;
		try {
			results ?? new Error('Failed request.');
			dispatch({ type: SUS_TEST_GET_RESULTS, payload: results });
		} catch (err) {
			dispatch({ type: SUS_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
