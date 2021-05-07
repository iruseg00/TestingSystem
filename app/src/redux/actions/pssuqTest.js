import {
	getPssuqQuestions,
	postPssuqAnswers,
	allAnswersRequest,
	postPssuqTestingSystemResults,
} from '../../services/pssuqTest';
import {
	PSSUQ_TEST_REQUEST,
	PSSUQ_TEST_SUCCESS,
	PSSUQ_TEST_FAILED,
	PSSUQ_TEST_GET_RESULTS,
	PSSUQ_TEST_GET_ALL_ANSWERS,
	PSSUQ_TEST_GET_TESTINGSYSTEM_TESTS,
} from '../actionsTypes/pssuqTest';
import { message } from 'antd';

export function getPssuqTest() {
	return async function (dispatch) {
		dispatch({ type: PSSUQ_TEST_REQUEST });
		const response = await getPssuqQuestions();
		const ARRAY_OF_SUS_QUESTIONS = response?.data;
		try {
			ARRAY_OF_SUS_QUESTIONS ?? new Error('Failed request.');
			dispatch({ type: PSSUQ_TEST_SUCCESS, payload: ARRAY_OF_SUS_QUESTIONS });
		} catch (err) {
			dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
export function getResults(data) {
	return async function (dispatch) {
		dispatch({ type: PSSUQ_TEST_REQUEST });
		const response = await postPssuqAnswers(data);
		const results = response?.data;
		try {
			results ?? new Error('Failed request.');
			dispatch({ type: PSSUQ_TEST_GET_RESULTS, payload: results });
		} catch (err) {
			dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getAllPssuqAnswers() {
	return async function (dispatch) {
		dispatch({ type: PSSUQ_TEST_REQUEST });
		const response = await allAnswersRequest();
		const answers = response?.data;
		try {
			answers ?? new Error('Failed request.');
			dispatch({ type: PSSUQ_TEST_GET_ALL_ANSWERS, payload: answers });
		} catch (err) {
			dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}

export function getTestingSystemResults(data) {
	return async function (dispatch) {
		dispatch({ type: PSSUQ_TEST_REQUEST });
		const response = await postPssuqTestingSystemResults(data);
		const results = response?.data;
		try {
			results ?? new Error('Failed reauest');
			dispatch({ type: PSSUQ_TEST_GET_TESTINGSYSTEM_TESTS, payload: results });
		} catch (err) {
			dispatch({ type: PSSUQ_TEST_FAILED, payload: err });
			message.error(err);
		}
	};
}
