import PassedTest from '../../components/passedTest/PassedTest';
import style from './style.module.scss';
import boxes from '../../assets/images/Vector.svg';
import { getAllSusAnswers } from '../../redux/actions/susTest';
import { getAllPssuqAnswers } from '../../redux/actions/pssuqTest';
import { getAllMdtAnswers } from '../../redux/actions/mdtTest';

const PassedTests = () => {
	return (
		<div className={style.general}>
			<div className={style.generalTitle}>
				<span>Пройденные тесты</span>
			</div>
			<div className={style.container}>
				<PassedTest image={boxes} title={'SUS'} action={getAllSusAnswers} />
				<PassedTest image={boxes} title={'PSSUQ'} action={getAllPssuqAnswers} />
				<PassedTest image={boxes} title={'MDT'} action={getAllMdtAnswers} />
			</div>
		</div>
	);
};

export default PassedTests;
