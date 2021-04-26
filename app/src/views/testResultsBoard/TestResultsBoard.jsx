import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PassedTests from '../passedTests/index';
import SusPassedPage from '../susPassedPage/Index';
import PssuqPassedPage from '../pssuqPassedPage/index';
import MdtPassedPage from '../mdtPassedPage/index';

import TestingSystemInfo from '../../components/testingSystemInfo/TestingSystemInfo';

import Page_404 from '../page_404/Page_404';

import Header from '../../components/header/Header';

const TestsResultsBoard = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/passed_tests' exact component={PassedTests} />
				<Route path='/passed_tests/sus/:testingsystem' component={TestingSystemInfo} />
				<Route path='/passed_tests/sus' component={SusPassedPage} />
				<Route path='/passed_tests/pssuq/:testingsystem' component={TestingSystemInfo} />
				<Route path='/passed_tests/pssuq' component={PssuqPassedPage} />
				<Route path='/passed_tests/mdt/:testingsystem' component={TestingSystemInfo} />
				<Route path='/passed_tests/mdt' component={MdtPassedPage} />
				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
};

export default TestsResultsBoard;
