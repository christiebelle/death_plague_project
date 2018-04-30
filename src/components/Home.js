import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Info from "../components/Info";

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
        <Map point={this.state.selectedPoint}/>
        <Info />
      </React.Fragment>
    </div>
  );
}}


export default Home;
