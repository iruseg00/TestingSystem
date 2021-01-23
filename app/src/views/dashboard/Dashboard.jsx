// import style from "./style.module.scss";
import Header from "../../components/header/Header";
import PageWrapper from "../../containers/pageWrapper/PageWrapper";
import React from "react";
import { Switch, Route } from "react-router-dom";

import TestSelectionLayout from "./testSelection/TestSelection";
import SUSTestLayout from "./susTest/SUSTest";
import PSSUQTestLayout from "./pssuqTest/PSSUQTest";
import MDTTestLayout from "./mdtTest/MDTTest";

function MainTests() {
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exec
          path="/dashboard/test-choosing"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Выбор теста"
              component={TestSelectionLayout}
            />
          )}
        />
        <Route
          exec
          path="/dashboard/sus"
          render={(props) => (
            <PageWrapper
              {...props}
              title="SUS Test"
              component={SUSTestLayout}
            />
          )}
        />
        <Route
          exec
          path="/dashboard/pssuq"
          render={(props) => (
            <PageWrapper
              {...props}
              title="PSSUQ Test"
              component={PSSUQTestLayout}
            />
          )}
        />
        <Route
          exec
          path="/dashboard/mdt"
          render={(props) => (
            <PageWrapper
              {...props}
              title="MDT Test"
              component={MDTTestLayout}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default MainTests;
