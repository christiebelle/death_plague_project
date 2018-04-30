
import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Splash from "./Splash";
import Home from "./Home";
import Overview from "./Overview";
import Facts from "./Facts";
import Ask from "./Ask";

import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {
    return(
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Splash} />
          <Route path="/home" component={Home} />
          <Route path="/overview" component={Overview} />
          <Route path="/facts" component={Facts} />
          <Route path="/ask" component={Ask} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
