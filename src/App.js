import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//
import Layout from "./hoc/layout/Layout";
//
import Landing from "./containers/landing/Landing";
import Show from "./containers/show/Show";

//
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/stocks/:symbol" component={Show} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    );

    return <Layout>{routes}</Layout>;
  }
}

export default App;
