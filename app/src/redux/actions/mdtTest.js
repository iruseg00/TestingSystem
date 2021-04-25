import {
	getMdtQuestions,
	postMdtAnswers,
	allAnswersRequest,
} from '../../services/mdtTest';
import {
	MDT_TEST_REQUEST,
	MDT_TEST_SUCCESS,
	MDT_TEST_FAILED,
	MDT_TEST_GET_RESULTS,
	MDT_TEST_GET_ALL_ANSWERS,
} from '../actionsTypes/mdtTest';
import { message } from 'antd';

export function getMdtTest() {
	return async function (dispatch) {
		dispatch({ type: MDT_TEST_REQUEST });
		const response = await getMdtQuestions();
		const ARRAY_OF_SUS_QUESTIONS = response?.data;
		try {
			ARRAY_OF_SUS_QUESTIONS ?? new Error('Failed request.');
			dispatch({ type: MDT_TEST_SUCCESS, payload: ARRAY_OF_SUS_QUESTIONS });
		} catch (err) {
			dispatch({ type: MDT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getResults(data) {
	return async function (dispatch) {
		dispatch({ type: MDT_TEST_REQUEST });
		const response = await postMdtAnswers(data);
		const results = response?.data;
		try {
			results ?? new Error('Failed request.');
			dispatch({ type: MDT_TEST_GET_RESULTS, payload: results });
		} catch (err) {
			dispatch({ type: MDT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getAllMdtAnswers() {
	return async function (dispatch) {
		dispatch({ type: MDT_TEST_REQUEST });
		const response = await allAnswersRequest();
		const answers = response?.data;
		try {
			answers ?? new Error('Failed request.');
			dispatch({ type: MDT_TEST_GET_ALL_ANSWERS, payload: answers });
		} catch (err) {
			dispatch({ type: MDT_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
