// import style from './style.module.scss';
import TestSetup from '../../../components/testSetupForm/TestSetupForm';
import boxes from '../../../assets/images/cubes-solid_1.svg';
import Stepps from './../../../components/steps/Steps';

function SUSTest() {
	return (
		<Stepps
			step_one={TestSetup}
			step_one_props={{
				title_of_test: 'System Usability Scale',
				img: boxes,
			}}
		/>
	);
}

export default SUSTest;
