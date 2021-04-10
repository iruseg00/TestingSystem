import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Button, Progress } from 'antd';

const Step_3 = (props) => {
	const RESULTS = useSelector((state) => state.susTest.results);
	console.log(RESULTS);
	return (
		<div className={style.container}>
			<div className={style.title}>SusTest</div>
			<div className={style.img_and_progress}>
				<div className={style.image_container}>
					<img className={style.image} src={props.img} alt='img' />
				</div>
				<div className={style.progress}>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							percent={`${RESULTS.value}`}
						/>
						<p className={style.desc}>Общая оценка</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							percent={`${RESULTS.percentile}`}
						/>
						<p className={style.desc}>Процентиль</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							trailColor='#559AC8'
							format={() => `${RESULTS.type}`}
						/>
						<p className={style.desc}>Оценка</p>
					</div>
				</div>
			</div>
			<span className={style.pdf}>Скачать PDF</span>
			<Button type='primary' htmlType='submit' className={style.submit}>
				Подтвердить
			</Button>
		</div>
	);
};

export default Step_3;
