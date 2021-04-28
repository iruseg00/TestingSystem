import style from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTestingSystemResults } from '../../redux/actions/susTest';
import TestingSystemResult from '../testingSystemResult/TestingSystemResult';

const TestingSystemInfo = (props) => {
	let { testingsystem } = useParams();
	const dispatch = useDispatch();
	dispatch(getTestingSystemResults({ testingSystem: testingsystem }));
	const pathOfTest = props.statePath;
	console.log(pathOfTest);
	const testingSystemResults = useSelector(
		(state) => state[pathOfTest].testingSystemTests
	);
	let date = props.state.date && new Date(props.state.date).toISOString().substring(0, 10);
	let getTesingSystemComponents = () =>
		testingSystemResults.map((element) => (
			<TestingSystemResult key={element.ID} description={element.description} date={date} />
		));

	return <div className={style.container}>{getTesingSystemComponents()}</div>;
};

export default TestingSystemInfo;
