import style from './style.module.scss';

const PassedTestResult = (props) => {
	const editState = () => {
		return props.setState({
			description: props.description,
			date: props.date,
		});
	};
	return (
		<div onClick={editState} className={style.container}>
			<span className={style.testingSystem}>{props.testingSystem}</span>
			<span className={style.count}>Количество: {props.count}</span>
		</div>
	);
};

export default PassedTestResult;
