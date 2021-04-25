import style from './style.module.scss';
// import { Link } from 'react-router-dom';

const PassedTestResult = ({ count, testingSystem }) => {
	return (
		// <Link to={`/dashboard/passed_tests/${props.title.toLowerCase()}`}>
		<div className={style.container}>
			<span className={style.testingSystem}>{testingSystem}</span>
			<span className={style.count}>Количество: {count}</span>
		</div>
		// </Link>
	);
};

export default PassedTestResult;
