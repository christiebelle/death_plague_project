import React, { Component } from "react";
import Splash from "./Splash";
import Home from "./Home";
import Ask from "./Ask";

import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      facts: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/facts")
    .then(response => response.json())
    .then(json => this.setState({facts: json}))
  }

  render() {
    return(
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Splash} />
          <Route path="/home" component={Home} />
          <Route path="/ask" component={Ask} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
