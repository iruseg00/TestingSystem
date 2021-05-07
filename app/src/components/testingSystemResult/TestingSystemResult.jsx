import { Link } from 'react-router-dom';
import style from './style.module.scss';

const TestingSystemResult = ({ date, description, testingSystem, typeOfTest, ID }) => {
	return (
		<Link to={`/dashboard/passed_tests/${typeOfTest.toLowerCase()}/${testingSystem}/${ID}`}>
			<div className={style.container}>
				<div className={style.typeOfTest}>{typeOfTest}</div>
				<div className={style.description}>{description}</div>
				<div className={style.date}>{date}</div>
			</div>
		</Link>
	);
};

export default TestingSystemResult;
