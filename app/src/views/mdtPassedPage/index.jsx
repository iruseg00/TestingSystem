import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PassedTestOverview from '../../components/passedTestOverview/PassedTestOverview';
import PassedTestResult from '../../components/passedTest/passedTestResult/PassedTestResult';
import { getAllMdtAnswers, getTestingSystemResults } from '../../redux/actions/mdtTest';
import image from '../../assets/images/cubes-solid_1.svg';
import style from './style.module.scss';

const MdtPassedPage = ({ setDate }) => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getAllMdtAnswers()), []);
	const answers = useSelector((state) => state.mdtTest.allAnswers);
	const getContent = () =>
		answers.map((item, index) => (
			<Link
				to={`/dashboard/passed_tests/mdt/${item.rows[0].testingSystem}`}
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
			<PassedTestOverview
				image={image}
				title='MDT'
				subTitle='Microsoft Desirability Toolkit'
			/>
			<div className={style.containerToResults}>{getContent()}</div>
		</div>
	);
};

export default MdtPassedPage;
