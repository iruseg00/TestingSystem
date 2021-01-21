// import style from "./style.module.scss";
import Header from "../../components/header/Header";
import PageWrapper from "../../containers/pageWrapper/PageWrapper";
import React from "react";
import { Switch, Route } from "react-router-dom";

import TestSelectionLayout from "./testSelection/TestSelection";

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
      </Switch>
    </div>
  );
}

export default MainTests;
