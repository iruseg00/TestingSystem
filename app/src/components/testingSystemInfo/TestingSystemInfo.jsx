import style from './style.module.scss';

const TestingSystemInfo = ({ state }) => {
	return (
		<div>
			<div>{state.description}</div>
			<div>{state.date}</div>
		</div>
	);
};

export default TestingSystemInfo;
