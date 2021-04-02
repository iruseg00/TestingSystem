// import style from "./style.module.scss";
import Header from '../../components/header/Header';
import PageWrapper from '../../containers/pageWrapper/PageWrapper';
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
        <Route
          path="/dashboard"
          exact
          render={(props) => (
            <PageWrapper
              {...props}
              title="SUS Test Setup"
              component={TestSelectionLayout}
            />
          )}
        />
        <Route
          path="/dashboard/sus"
          render={(props) => (
            <PageWrapper
              {...props}
              title="SUS Test Setup"
              component={SUSTestSetupLayout}
            />
          )}
        />
        <Route
          path="/dashboard/pssuq"
          render={(props) => (
            <PageWrapper
              {...props}
              title="PSSUQ Test Setup"
              component={PSSUQTestSetupLayout}
            />
          )}
        />
        <Route
          path="/dashboard/mdt"
          render={(props) => (
            <PageWrapper
              {...props}
              title="MDT Test Setup"
              component={MDTTestSetupLayout}
            />
          )}
        />
        <Route
          path="/dashboard/susTest"
          render={(props) => (
            <PageWrapper
              {...props}
              title="SUS Test"
              component={SUSTestLayout}
            />
          )}
        />
        <Route
          path="/dashboard/pssuqTest"
          render={(props) => (
            <PageWrapper
              {...props}
              title="PSSUQ Test"
              component={PSSUQTestLayout}
            />
          )}
        />
        <Route
          path="/dashboard/mdtTest"
          render={(props) => (
            <PageWrapper
              {...props}
              title="MDT Test"
              component={MDTTestLayout}
            />
          )}
        />
        <Route path="*" exact component={Page_404} />
      </Switch>
    </div>
  );
}

export default MainTests;
