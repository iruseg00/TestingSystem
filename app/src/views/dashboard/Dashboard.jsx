import Header from '../../components/header/Header';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TestSelectionLayout from './testSelection/TestSelection';

import SUSTestSetupLayout from '../susTestSetup/SUSTestSetup';
import MDTTestSetupLayout from '../mdtTestSetup/MDTTestSetup';

import Page_404 from '../page_404/Page_404';

function MainTests() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/dashboard' exact component={TestSelectionLayout} />
				<Route path='/dashboard/sus' component={SUSTestSetupLayout} />
				<Route path='/dashboard/mdt' component={MDTTestSetupLayout} />
				<Route path='*' exact component={Page_404} />
			</Switch>
		</div>
	);
}

export default MainTests;
