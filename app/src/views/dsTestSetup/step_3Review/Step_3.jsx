import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Progress } from 'antd';
import style from './style.module.scss';

const Step_3 = (props) => {
	const dispatch = useDispatch();
	const { testingSystem, id } = useParams();
	useEffect(() => dispatch(props.action({ testingSystem })), []);
	const testingSystemTests = useSelector((state) => state.dsTest.testingSystemTests);
	const results = testingSystemTests.find((item) => item.ID == id)?.results;

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
							format={() => `${results?.AK}`}
							percent={0}
						/>
						<p className={style.desc}>АК</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.BO}`}
							percent={0}
						/>
						<p className={style.desc}>Бо</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.TO}`}
							percent={0}
						/>
						<p className={style.desc}>То</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.PA}`}
							percent={0}
						/>
						<p className={style.desc}>Ра</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.SP}`}
							percent={0}
						/>
						<p className={style.desc}>Сп</p>
					</div>
					<div className={style.container_to_progress_component}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.US}`}
							percent={0}
						/>
						<p className={style.desc}>Ус</p>
					</div>
					<div className={style.container_to_progress_component_1}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.UD}`}
							percent={0}
						/>
						<p className={style.desc}>Уд</p>
					</div>
					<div className={style.container_to_progress_component_2}>
						<Progress
							className={style.progress_component}
							type='circle'
							strokeWidth='12'
							strokeColor='#559AC8'
							format={() => `${results?.PO}`}
							percent={0}
						/>
						<p className={style.desc}>По</p>
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
