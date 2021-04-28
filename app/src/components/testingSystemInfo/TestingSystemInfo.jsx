import { useSelector } from 'react-redux';
import TestingSystemResult from '../testingSystemResult/TestingSystemResult';
import style from './style.module.scss';

const TestingSystemInfo = ({ statePath, date }) => {
	const testingSystemResults = useSelector(
		(state) => state[statePath].testingSystemTests
	);
	const DATE = date && new Date(date).toISOString().substring(0, 10);
	const getTesingSystemComponents = () =>
		testingSystemResults.map((element) => (
			<TestingSystemResult key={element.ID} description={element.description} date={DATE} />
		));

	return <div className={style.container}>{getTesingSystemComponents()}</div>;
};

export default TestingSystemInfo;
