import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Button, Progress } from 'antd';
import { Link } from 'react-router-dom';

const Step_3 = (props) => {
	const results = useSelector((state) => state.susTest.results);
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
							percent={results.value}
						/>
						<p className={style.desc}>Общая оценка</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							percent={results.percentile}
						/>
						<p className={style.desc}>Процентиль</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							trailColor='#559AC8'
							format={() => results.type}
						/>
						<p className={style.desc}>Оценка</p>
					</div>
				</div>
			</div>
			<span className={style.pdf}>Скачать PDF</span>
			<Link to='/dashboard'>
				<Button type='primary' htmlType='submit' className={style.submit}>
					Подтвердить
				</Button>
			</Link>
		</div>
	);
};

export default Step_3;
