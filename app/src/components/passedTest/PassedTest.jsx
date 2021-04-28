import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';

const PassedTest = (props) => {
	const dispatch = useDispatch();
	return (
		<Link
			to={`/dashboard/passed_tests/${props.title.toLowerCase()}`}
			onClick={() => dispatch(props.action())}
		>
			<div className={style.container}>
				<img className={style.image} src={props.image} alt='img' />
				<span className={style.title}>{props.title}</span>
			</div>
		</Link>
	);
};

export default PassedTest;
