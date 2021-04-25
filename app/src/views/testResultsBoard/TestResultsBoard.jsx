import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PassedTests from '../passedTests/index';
import SusPassedPage from '../susPassedPage/Index';
import PssuqPassedPage from '../pssuqPassedPage/index';
import MdtPassedPage from '../mdtPassedPage/index';
import Page_404 from '../page_404/Page_404';

import Header from '../../components/header/Header';

const TestsResultsBoard = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/passed_tests' exact component={PassedTests}></Route>
				<Route path='/passed_tests/sus' component={SusPassedPage}></Route>
				<Route path='/passed_tests/pssuq' component={PssuqPassedPage}></Route>
				<Route path='/passed_tests/mdt' component={MdtPassedPage}></Route>
				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
};

export default TestsResultsBoard;
