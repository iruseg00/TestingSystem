import style from './style.module.scss';

const TestingSystemResult = ({ date, description, testingSystem, typeOfTest }) => {
	return (
		<div className={style.container}>
			<div className={style.typeOfTest}>{typeOfTest}</div>
			<div className={style.description}>{description}</div>
			<div className={style.date}>{date}</div>
		</div>
	);
};

export default TestingSystemResult;
