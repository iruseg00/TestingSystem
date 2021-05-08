import { Link } from 'react-router-dom';
import style from './style.module.scss';

const TestingSystemResult = ({ date, description, testingSystem, typeOfTest, ID }) => {
	const DATE = date && new Date(date).toISOString().substring(0, 10);
	const TIME = date && new Date(date).toISOString().substring(11, 16);
	const newDate = DATE + ' ' + TIME;
	return (
		<Link to={`/dashboard/passed_tests/${typeOfTest.toLowerCase()}/${testingSystem}/${ID}`}>
			<div className={style.container}>
				<div className={style.typeOfTest}>{typeOfTest}</div>
				<div className={style.description}>{description}</div>
				<div className={style.date}>{newDate}</div>
			</div>
		</Link>
	);
};

export default TestingSystemResult;
