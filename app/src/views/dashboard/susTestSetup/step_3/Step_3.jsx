import { useSelector } from 'react-redux';
import style from './style.module.scss';
import { Progress } from 'antd';

const Step_3 = (props) => {
	const RESULTS = useSelector((state) => state.susTest.results);
	console.log(RESULTS);
	return (
		<div className={style.container}>
			<Progress type='circle' strokeColor='#559AC8' percent={`${RESULTS.value}`} />
			<Progress type='circle' strokeColor='#559AC8' percent={`${RESULTS.percentile}`} />
			<Progress type='circle' trailColor='#559AC8' format={() => `${RESULTS.type}`} />
		</div>
	);
};

export default Step_3;
