import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import { Button, Progress } from 'antd';
import { Link, useParams } from 'react-router-dom';

const Step_3 = (props) => {
	const dispatch = useDispatch();
	const match = useParams();
	useEffect(() => dispatch(props.action({ testingSystem: match.testingSystem })), []);
	const testingSystemResponse = useSelector((state) => state.mdtTest.testingSystemTests);
	for (let i = 0; i < testingSystemResponse.length; i++) {
		if (testingSystemResponse[i].ID == match.id) {
			var resultToStep = {
				plus: testingSystemResponse[i].results.plus,
				minus: testingSystemResponse[i].results.minus,
			};
		}
	}

	return (
		<div className={style.container}>
			<div className={style.title}>Microsoft Desirability Toolkit</div>
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
							percent={resultToStep.plus}
						/>
						<p className={style.desc}>Количество положиительных прилагательных</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							percent={resultToStep.minus}
						/>
						<p className={style.desc}>Количество отрицательных прилагательных</p>
					</div>
				</div>
			</div>
			<span className={style.pdf}>Скачать PDF</span>
			<div className={style.containerToButton}>
				<Button type='primary' htmlType='submit' className={style.submit}>
					<Link className={style.linkButton} to='/dashboard'>
						Подтвердить
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default Step_3;
