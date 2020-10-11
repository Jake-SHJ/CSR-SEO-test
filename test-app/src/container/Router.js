import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TestA from "../pages/TestA";
import TestB from "../pages/TestB";

export default function TestRouter() {
  return (
    <Switch>
      <Route path="/test-A" exact="true" component={TestA} />
      <Route path="/test-B" exact="true" component={TestB} />
      <Redirect to="/test-A" />
    </Switch>
  );
}
