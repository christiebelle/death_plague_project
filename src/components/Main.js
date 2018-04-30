import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import Splash from "./Splash";
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
          <Header />
          <Navbar />
          <Route exact path="/" component={Splash} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
