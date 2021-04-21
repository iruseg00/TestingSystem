import PassedTest from '../../components/passedTest/PassedTest';
import style from './style.module.scss';
import boxes from '../../assets/images/Vector.svg';

const PassedTests = () => {
	return (
		<div className={style.general}>
			<div className={style.generalTitle}>
				<span>Пройденные тесты</span>
			</div>
			<div className={style.container}>
				<PassedTest image={boxes} title={'SUS'} />
				<PassedTest image={boxes} title={'PSSUQ'} />
				<PassedTest image={boxes} title={'MDT'} />
				<PassedTest image={boxes} title={'SUS'} />
				<PassedTest image={boxes} title={'SUS'} />
				<PassedTest image={boxes} title={'PSSUQ'} />
				<PassedTest image={boxes} title={'MDT'} />
				<PassedTest image={boxes} title={'SUS'} />
			</div>
			<div className={style.containerToButton}></div>
		</div>
	);
};

export default PassedTests;
