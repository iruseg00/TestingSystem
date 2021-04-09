import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Progress } from 'antd';

const Step_3 = (props) => {
	const RESULTS = useSelector((state) => state.susTest.results);
	console.log(RESULTS);
	return (
		<div className={style.container}>
			<Progress type='circle' percent={75} />
			<Progress type='circle' percent={70} status='exception' />
			<Progress type='circle' percent={100} />
		</div>
	);
};

export default Step_3;
