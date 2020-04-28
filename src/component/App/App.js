import React, { Component } from "react";
import CV from "../CV/CV";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "../ContactForm/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <CV></CV>
          </Route>
          <Route path="/contact" exact={false}>
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
