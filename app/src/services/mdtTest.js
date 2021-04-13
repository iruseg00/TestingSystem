import api from '../helper/api';

export const getMdtQuestions = async () => api('mdt/all_questions');
export const postMdtAnswers = async (data) => api('mdt/create_answer', 'POST', data);
