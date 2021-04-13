// max value of answer in sus test is 5, MAX_VALUE = 5 - 1;
const MAX_VALUE_SUS = 4;
// max value of answer in pssuq test is 10, MAX_VALUE = 10 - 1;
const MAX_VALUE_PSSUQ = 9;

export const SusTest = async (answers) => {
	const value = (
		(answers.reduce((summa, item) => summa + item.answer, -answers.length) * 100) /
		(MAX_VALUE_SUS * answers.length)
	).toFixed(0);
	const type = value >= 90 ? 'A1' : value >= 60 ? 'A2' : value >= 40 ? 'A3' : 'A4';
	return { value, type };
};

export const PssuqTest = async (answers) => {
	const value = (
		(answers.reduce((summa, item) => summa + item.answer, -answers.length) * 100) /
		(MAX_VALUE_PSSUQ * answers.length)
	).toFixed(0);
	const type = value >= 90 ? 'A1' : value >= 60 ? 'A2' : value >= 40 ? 'A3' : 'A4';
	return { value, type };
};

export const MdtTest = async (results) => {
	let plus, minus;
	let marks = results.map((item) => item.mark);
	plus = marks.filter((item) => item == true).length;
	minus = marks.filter((item) => item == false).length;
	return { plus, minus };
};
