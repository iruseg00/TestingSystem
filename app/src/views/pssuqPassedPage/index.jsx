import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import image from '../../assets/images/cubes-solid_1.svg';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';

const PssuqPassedPage = (props) => {
	const answers = useSelector((state) => state.pssuqTest.allAnswers);
	const getContent = () =>
		answers.map((item, index) => (
			<Link to={`/passed_tests/pssuq/${item.rows[0].testingSystem}`}>
				<PassedTestResult
					key={index}
					testingSystem={item.rows[0].testingSystem}
					count={item.count}
					description={item.rows[0].description}
					date={item.rows[0].createdAt}
					setState={props.setState}
				/>
			</Link>
		));
	return (
		<div className={style.container}>
			<PassedTestOverview
				image={image}
				title='PSSUQ'
				subTitle='Post-Study System Usability Questionnaire'
			/>
			<div className={style.containerToResults}>{getContent()}</div>
		</div>
	);
};

export default PssuqPassedPage;
