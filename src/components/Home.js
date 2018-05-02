import React from "react";
import Header from "../components/Header";
import TombstoneContainer from "./TombstoneContainer"
import FactContainer from './FactContainer';
import Map from "./Map"
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainArticle from "./MainArticle"
import Image from "./Image"
import Splash from "./Splash";
import Ask from "./Ask";

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      facts: [],
      selectedPoint: null,
      selectedFact: null
    };
    this.sendPoint = this.sendPoint.bind(this);
    this.handleSelectedFactChanged = this.handleSelectedFactChanged.bind(this);
  }

  componentDidMount(){
    fetch("http://localhost:3001/facts")
    .then(response => response.json())
    .then(json => this.setState({facts: json}))
  }

  handleSelectedFactChanged = (index) => {
    this.setState({selectedFact: this.state.facts[index]});
  }

  sendPoint(){
    this.setState({selectedPoint: {lat:0, lng: 0}});
  }

  render(){
    return (
      <div>
        <React.Fragment>
          <Header />
          <Map />
          <TombstoneContainer
            onFactSelected = {this.handleSelectedFactChanged}
            fact = {this.state.selectedFact}
            facts ={this.state.facts}
          />
        </React.Fragment>
      </div>
    );
  }}


  export default Home;
