import Header from '../../components/header/Header';
import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import TestSelectionLayout from './testSelection/TestSelection';
import PSSUQTestSetupLayout from '../pssuqTestSetup/PSSUQTestSetup';
import SUSTestSetupLayout from '../susTestSetup/SUSTestSetup';
import MDTTestSetupLayout from '../mdtTestSetup/MDTTestSetup';

import Page_404 from '../page_404/Page_404';
import TestsResultsBoard from '../testResultsBoard/TestResultsBoard';

function MainTests() {
	const location = useLocation();
	useEffect(()=>
	{
		if(location.state?.prevState)  {
			location.state = undefined;
			// TODO
		}
	}, []);

	return (
		<div>
			<Header />
			<Switch>
				<Route path='/dashboard' exact component={TestSelectionLayout} />
				<Route path='/dashboard/sus' component={SUSTestSetupLayout} />
				<Route path='/dashboard/pssuq' component={PSSUQTestSetupLayout} />
				<Route path='/dashboard/mdt' component={MDTTestSetupLayout} />

				<Route path='/dashboard/passed_tests' component={TestsResultsBoard} />

				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
}

export default MainTests;
