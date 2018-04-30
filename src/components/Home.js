import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Info from "../components/Info";
import FactsContainer from "../containers/FactsContainer";

const Home = () => (
  <div>
    <React.Fragment>
      <Header />
      <Map />
      <Info />
    </React.Fragment>
  </div>
);


export default Home;
