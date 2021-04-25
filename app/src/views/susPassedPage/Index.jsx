import { useSelector } from 'react-redux';
import style from './style.module.scss';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import image from '../../assets/images/cubes-solid_1.svg';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';

const SusPassedPage = () => {
	const answers = useSelector((state) => state.susTest.allAnswers);
	const getContent = () =>
		answers.map((item, index) => (
			<PassedTestResult
				key={index}
				testingSystem={item.rows[0].testingSystem}
				count={item.count}
			/>
		));
	return (
		<div className={style.container}>
			<PassedTestOverview
				image={image}
				title='SUS'
				subTitle='Post-Study System Usability Questionnaire'
			/>
			<div className={style.containerToResults}>{getContent()}</div>
		</div>
	);
};

export default SusPassedPage;
