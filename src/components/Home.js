import React from "react";
import Header from "../components/Header";
import Tombstones from "./Tombstones"
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
      selectedPoint: null
    };
    this.sendPoint = this.sendPoint.bind(this);
  }

  componentDidMount(){
    fetch("http://localhost:3001/facts")
    .then(response => response.json())
    .then(json => this.setState({facts: json}))
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
          <Tombstones />
          <MainArticle />
          <Image />
        </React.Fragment>
      </div>
    );
  }}


  export default Home;
