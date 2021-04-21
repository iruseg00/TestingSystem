import style from './style.module.scss';

const PassedTest = (props) => {
	return (
		<div className={style.container}>
			<img className={style.image} src={props.image} alt='img' />
			<span className={style.title}>{props.title}</span>
		</div>
	);
};

export default PassedTest;
