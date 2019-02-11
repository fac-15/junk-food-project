import React, { Component } from "react";
import "./App.css";
// import Logo from "./img/logo.png";
import Dummy from "./component/logo/dummy.js";
import Button from "./component/button/button.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    driver: null,
    supplier: null,
    person: ''
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Dummy} />
          <Route path="/driver" component={Dummy} />
          <Route path="/supplier" component={Dummy} />
          <Route path="/success" component={Dummy} />
          <Route component={notFound} />
        </div>
      </Router>
    );
  }
}

export default App;
