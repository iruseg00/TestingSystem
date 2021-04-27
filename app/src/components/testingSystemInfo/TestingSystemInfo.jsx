import style from './style.module.scss';

const TestingSystemInfo = ({ state }) => {
	console.log(state.description);
	return (
		<div>
			<div>TestingSystem: {state.testingSystem}</div>
			<div>Description: {state.description}</div>
			<div>Date: {state.date}</div>
		</div>
	);
};

export default TestingSystemInfo;
