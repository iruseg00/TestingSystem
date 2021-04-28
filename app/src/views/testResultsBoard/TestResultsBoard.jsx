import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PassedTests from '../passedTests/index';
import SusPassedPage from '../susPassedPage/Index';
import PssuqPassedPage from '../pssuqPassedPage/index';
import MdtPassedPage from '../mdtPassedPage/index';

import TestingSystemInfo from '../../components/testingSystemInfo/TestingSystemInfo';
import Page_404 from '../page_404/Page_404';

const TestsResultsBoard = () => {
	const [date, setDate] = useState();
	return (
		<Switch>
			<Route path='/dashboard/passed_tests' exact component={PassedTests} />
			<Route
				path='/dashboard/passed_tests/sus/:testingSystem'
				render={() => <TestingSystemInfo statePath='susTest' date={date} />}
			/>
			<Route
				path='/dashboard/passed_tests/sus'
				render={() => <SusPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq/:testingsystem'
				render={() => <TestingSystemInfo date={date} />}
			/>
			<Route
				path='/dashboard/passed_tests/pssuq'
				render={() => <PssuqPassedPage setDate={setDate} />}
			/>
			<Route
				path='/dashboard/passed_tests/mdt/:testingsystem'
				render={() => <TestingSystemInfo date={date} />}
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
