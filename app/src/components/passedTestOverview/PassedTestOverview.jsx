import style from './style.module.scss';

const PassedTestOverview = (props) => {
	return (
		<div className={style.container}>
			<div className={style.imageContainer}>
				<img className={style.image} src={props.image} alt='img' />
			</div>
			<div className={style.titles}>
				<span className={style.title}>{props.title}</span>
				<span className={style.subTitle}>{props.subTitle}</span>
			</div>
		</div>
	);
};

export default PassedTestOverview;
