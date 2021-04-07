import { getSusQuestions } from './../../services/sus_test';
import {
	SUS_TEST_REQUEST,
	SUS_TEST_SUCCESS,
	SUS_TEST_FAILED,
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
