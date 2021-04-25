import PassedTest from '../../components/passedTest/PassedTest';
import style from './style.module.scss';
import boxes from '../../assets/images/Vector.svg';
import { getAllAnswers } from '../../redux/actions/susTest';

const PassedTests = () => {
	return (
		<div className={style.general}>
			<div className={style.generalTitle}>
				<span>Пройденные тесты</span>
			</div>
			<div className={style.container}>
				<PassedTest image={boxes} title={'SUS'} action={getAllAnswers} />
				<PassedTest image={boxes} title={'PSSUQ'} />
				<PassedTest image={boxes} title={'MDT'} />
			</div>
		</div>
	);
};

export default PassedTests;
