import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './style.module.scss';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import image from '../../assets/images/cubes-solid_1.svg';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';

const SusPassedPage = (props) => {
	const answers = useSelector((state) => state.susTest.allAnswers);
	const getContent = () =>
		answers.map((item, index) => (
			<Link to={`/passed_tests/sus/${item.rows[0].testingSystem.toLowerCase()}`}>
				<PassedTestResult
					key={index}
					testingSystem={item.rows[0].testingSystem}
					count={item.count}
					description={item.rows[0].description}
					date='22.03.2021 20:18'
					setState={props.setState}
				/>
			</Link>
		));
	return (
		<div className={style.container}>
			<PassedTestOverview image={image} title='SUS' subTitle='System Usability Scale' />
			<div className={style.containerToResults}>{getContent()}</div>
		</div>
	);
};

export default SusPassedPage;
