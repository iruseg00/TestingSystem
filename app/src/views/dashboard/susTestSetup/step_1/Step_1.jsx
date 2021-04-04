import style from './style.module.scss';
import TestSetupForm from '../../../../components/testSetupForm/TestSetupForm';

const Step_1 = (props) => {
	return (
		<div className={style.container}>
			<div className={style.title}>{props.title}</div>

			<div className={style.container_to_TestSetup}>
				<img className={style.img_left} src={props.img} alt='' />
				<TestSetupForm func_next={props.func_next} />
			</div>
		</div>
	);
};

export default Step_1;
