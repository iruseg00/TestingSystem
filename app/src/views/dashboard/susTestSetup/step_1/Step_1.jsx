import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import TestSetupForm from '../../../../components/testSetupForm/TestSetupForm';
import { getSusTest } from '../../../../redux/actions/susTest';

export const GetDataFromInputSystem = (values) => {
	return console.log(values);
};

export const GetDataFromInputNote = (values) => {
	return console.log(values);
};

const Step_1 = (props) => {
	const dispatch = useDispatch();

	return (
		<div className={style.container}>
			<div className={style.title}>{props.title}</div>

			<div className={style.container_to_TestSetup}>
				<img className={style.img_left} src={props.img} alt='' />
				<TestSetupForm
					func_next={props.func_next}
					getTest={() => dispatch(getSusTest())}
					GetDataFromInputSystem={GetDataFromInputSystem}
					GetDataFromInputNote={GetDataFromInputNote}
				/>
			</div>
		</div>
	);
};

export default Step_1;
