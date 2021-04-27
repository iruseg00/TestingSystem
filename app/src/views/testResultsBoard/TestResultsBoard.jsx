import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import PassedTests from '../passedTests/index';
import SusPassedPage from '../susPassedPage/Index';
import PssuqPassedPage from '../pssuqPassedPage/index';
import MdtPassedPage from '../mdtPassedPage/index';

import TestingSystemInfo from '../../components/testingSystemInfo/TestingSystemInfo';

import Page_404 from '../page_404/Page_404';

import Header from '../../components/header/Header';

const TestsResultsBoard = () => {
	const [state, setState] = useState({});
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/passed_tests' exact component={PassedTests} />
				<Route
					path='/passed_tests/sus/:testingsystem'
					render={() => <TestingSystemInfo state={state} />}
				/>
				<Route
					path='/passed_tests/sus'
					render={() => <SusPassedPage setState={setState} />}
				/>
				<Route
					path='/passed_tests/pssuq/:testingsystem'
					render={() => <TestingSystemInfo state={state} />}
				/>
				<Route
					path='/passed_tests/pssuq'
					render={() => <PssuqPassedPage setState={setState} />}
				/>
				<Route
					path='/passed_tests/mdt/:testingsystem'
					render={() => <TestingSystemInfo state={state} />}
				/>
				<Route
					path='/passed_tests/mdt'
					render={() => <MdtPassedPage setState={setState} />}
				/>
				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
};

export default TestsResultsBoard;
