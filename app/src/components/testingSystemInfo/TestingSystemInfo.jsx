import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TestingSystemResult from '../testingSystemResult/TestingSystemResult';
import style from './style.module.scss';

const TestingSystemInfo = ({ statePath, date, typeOfTest, action }) => {
	const { testingSystem } = useParams();
	console.log(testingSystem + ' <------------------');
	const dispatch = useDispatch();
	useEffect(() => dispatch(action({ testingSystem })), []);
	const testingSystemResults = useSelector((state) => state[statePath].testingSystemTests);
	console.log(testingSystemResults);
	const DATE = date.date && new Date(date.date).toISOString().substring(0, 10);
	const getTesingSystemComponents = () =>
		testingSystemResults.map((element) => (
			<TestingSystemResult
				typeOfTest={typeOfTest}
				key={element.ID}
				ID={element.ID}
				testingSystem={element.testingSystem}
				description={element.description}
				date={DATE}
			/>
		));

	return (
		<div className={style.main}>
			<div className={style.testingSystem}>{date.testingSystem}</div>
			<div className={style.container}>{getTesingSystemComponents()}</div>
		</div>
	);
};

export default TestingSystemInfo;
