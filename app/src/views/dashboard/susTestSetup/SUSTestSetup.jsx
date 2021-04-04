import style from './style.module.scss';
import TestSetup from '../../../components/testSetupForm/TestSetupForm';
import boxes from '../../../assets/images/cubes-solid_1.svg';
import Stepps from './../../../components/steps/Steps';

function SUSTest() {
	return (
		<div className={style.container}>
			<div className={style.container_to_steps}>
				<Stepps step_one={TestSetup} />
			</div>
			<div className={style.continer_to_test_init}>
				<img className={style.boxes} src={boxes} alt='boxes' />
				<div className={style.testSetups}>
					<div className={style.testName}>System Usability Scale</div>
					<TestSetup />
				</div>
			</div>
		</div>
	);
}

export default SUSTest;
