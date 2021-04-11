import api from '../helper/api';

export const getSusQuestions = async () => api('sus/all_questions');
export const postSusAnswers = async (data) => api('sus/create_answer', 'POST', data);
