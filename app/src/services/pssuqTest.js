import api from '../helper/api';

export const getPssuqQuestions = async () => api('pssuq/all_questions');
export const postPssuqAnswers = async (data) => api('pssuq/create_answer', 'POST', data);
