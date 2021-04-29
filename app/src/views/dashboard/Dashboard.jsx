import Header from '../../components/header/Header';
import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import TestSelectionLayout from './testSelection/TestSelection';

import PSSUQTestSetupLayout from '../pssuqTestSetup/PSSUQTestSetup';
import SUSTestSetupLayout from '../susTestSetup/SUSTestSetup';
import MDTTestSetupLayout from '../mdtTestSetup/MDTTestSetup';

import PassedTests from '../passedTests';

import Page_404 from '../page_404/Page_404';

function MainTests() {
	const location = useLocation();
	useEffect(()=>
	{
		console.log(location.state?.prevState)
		if(location.state?.prevState)  {
			location.state = undefined;
			// TODO
			console.log(location);
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
				<Route path='/dashboard/passed_tests' component={PassedTests} />
				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
}

export default MainTests;
