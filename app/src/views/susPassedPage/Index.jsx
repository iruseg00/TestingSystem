import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';
import { getTestingSystemResults } from '../../redux/actions/susTest';
import image from '../../assets/images/cubes-solid_1.svg';
import style from './style.module.scss';

const SusPassedPage = ({ setDate }) => {
	const dispatch = useDispatch();
	const answers = useSelector((state) => state.susTest.allAnswers);
	const getContent = () =>
		answers.map((item, index) => (
			<Link
				to={`/dashboard/passed_tests/sus/${item.rows[0].testingSystem}`}
				onClick={() =>
					dispatch(getTestingSystemResults({ testingSystem: item.rows[0].testingSystem }))
				}
			>
				<PassedTestResult
					key={index}
					testingSystem={item.rows[0].testingSystem}
					count={item.count}
					date={item.rows[0].createdAt}
					setDate={setDate}
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
