import React from "react";
import Header from "../components/Header";
import Tombstones from "./Tombstones"
import Map from "./Map"

import MainArticle from "./MainArticle"
import Image from "./Image"


class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selectedPoint: null
    };
    this.sendPoint = this.sendPoint.bind(this);
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
