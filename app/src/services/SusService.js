import axios from 'axios';

export const GetSusQuestions = async () => {
	axios.get('/sus/all_questions');
};
