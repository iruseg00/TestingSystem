import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Progress } from 'antd';
import style from './style.module.scss';

const Step_3 = (props) => {
	const dispatch = useDispatch();
	const { testingSystem, id } = useParams();
	useEffect(() => dispatch(props.action({ testingSystem })), []);
	const testingSystemTests = useSelector((state) => state.acTest.testingSystemTests);
	const results = testingSystemTests.find((item) => item.ID == id)?.results;
	console.log(results);

	return (
		<div className={style.container}>
			<div className={style.title}>System Usability Scale</div>
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
							format={() => `${results.AK_AC}`}
							percent={0}
						/>
						<p className={style.desc}>Ак - Ас</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.BO}`}
							percent={0}
						/>
						<p className={style.desc}>Во</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.CA}`}
							percent={0}
						/>
						<p className={style.desc}>Са</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.TO_AC}`}
							percent={0}
						/>
						<p className={style.desc}>То - Ас</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results.SP_AC}`}
							percent={0}
						/>
						<p className={style.desc}>Сп - Ас</p>
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
