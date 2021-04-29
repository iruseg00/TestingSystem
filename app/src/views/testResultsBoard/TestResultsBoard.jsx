import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PassedTests from '../passedTests/index';
import SusPassedPage from '../susPassedPage/Index';
import PssuqPassedPage from '../pssuqPassedPage/index';
import MdtPassedPage from '../mdtPassedPage/index';

import TestingSystemInfo from '../../components/testingSystemInfo/TestingSystemInfo';
import Page_404 from '../page_404/Page_404';

import Step3Pssuq from '../pssuqTestSetup/step_3Review/Step_3';
import imagePssuq from '../../assets/images/cubes-solid_2.svg';
import Step3Mdt from '../mdtTestSetup/step_3Review/Step_3';
import imageMdt from '../../assets/images/cubes-solid_1.svg';

const TestsResultsBoard = () => {
	const [date, setDate] = useState({});
	return (
		<Switch>
			<Route path='/dashboard/passed_tests' exact component={PassedTests} />
			<Route
				path='/dashboard/passed_tests/mdt/:testingSystem/:id'
				render={() => <Step3Mdt img={imageMdt} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq/:testingSystem/:id'
				render={() => <Step3Pssuq img={imagePssuq} />}
			/>
			<Route
				path='/dashboard/passed_tests/sus/:testingSystem'
				render={() => <TestingSystemInfo typeOfTest='SUS' statePath='susTest' date={date} />}
			/>
			<Route
				path='/dashboard/passed_tests/sus'
				render={() => <SusPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq/:testingSystem'
				render={() => (
					<TestingSystemInfo typeOfTest='PSSUQ' statePath='pssuqTest' date={date} />
				)}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq'
				render={() => <PssuqPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/mdt/:testingSystem'
				render={() => <TestingSystemInfo typeOfTest='MDT' statePath='mdtTest' date={date} />}
			/>
			<Route
				path='/dashboard/passed_tests/mdt'
				render={() => <MdtPassedPage setDate={setDate} />}
			/>
			<Route path='/*' exact component={Page_404} />
		</Switch>
	);
};

export default TestsResultsBoard;
