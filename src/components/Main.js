import React, { Component } from "react";
import Splash from "./Splash";
import Home from "./Home";
import Ask from "./Ask";

import {BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      factsArray: []
    }
  }

componentDidMount(){
  const request = new XMLHttpRequest();
    request.open('GET', "http://localhost:3001/facts");
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const factsArray = JSON.parse(jsonString)
        this.setState({songs: factsArray});
      }
    };
    request.send();
    console.log(factsArray);
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
