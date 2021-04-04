import Header from '../../components/header/Header';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TestSelectionLayout from './testSelection/TestSelection';

import SUSTestSetupLayout from './susTestSetup/SUSTestSetup';
import PSSUQTestSetupLayout from './pssuqTestSetup/PSSUQTestSetup';
import MDTTestSetupLayout from './mdtTestSetup/MDTTestSetup';

import SUSTestLayout from './susTest/SUSTest';
import PSSUQTestLayout from './pssuqTest/PSSUQTest';
import MDTTestLayout from './mdtTest/MDTTest';
import Page_404 from '../page_404/Page_404';

function MainTests() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/dashboard' exact component={TestSelectionLayout} />
				<Route path='/dashboard/sus' component={SUSTestSetupLayout} />
				<Route path='/dashboard/pssuq' component={PSSUQTestSetupLayout} />
				<Route path='/dashboard/mdt' component={MDTTestSetupLayout} />
				<Route path='/dashboard/susTest' component={SUSTestLayout} />
				<Route path='/dashboard/pssuqTest' component={PSSUQTestLayout} />
				<Route path='/dashboard/mdtTest' component={MDTTestLayout} />
				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
}

export default MainTests;
