import { useSelector } from 'react-redux';
import style from './style.module.scss';

const Step_3 = (props) => {
	const RESULTS = useSelector((state) => state.susTest.results);
	console.log(RESULTS);
	return <div className={style.container}>Заглушка</div>;
};

export default Step_3;
