import api from '../helper/api';

export const getPssuqQuestions = async () => await api('pssuq/all_questions');
export const postPssuqAnswers = async (data) =>
	await api('pssu/create_answer', 'POST', data);
