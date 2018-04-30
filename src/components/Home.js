import React from "react";
import Header from "../components/Header";
import FactsContainer from "../containers/FactsContainer";

const Home = () => (
  <div>
    <React.Fragment>
      <Header />
      <FactsContainer />
    </React.Fragment>
  </div>
);


export default Home;


//
// import React, { Component } from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import Splash from "./Splash";
// import Home from "./Home";
// import Overview from "./Overview";
// import Facts from "./Facts";
// import Ask from "./Ask";
//
// import {BrowserRouter as Router, Route} from "react-router-dom";
//
// class Main extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//
//     }
//   }
//
//
//   render() {
//     return(
//       <Router>
//         <React.Fragment>
//           <Header />
//           <Navbar />
//           <Route exact path="/" component={Home} />
//           <Route path="/overview" component={Overview} />
//           <Route path="/facts" component={Facts} />
//           <Route path="/ask" component={Ask} />
//         </React.Fragment>
//       </Router>
//     );
//   }
// }
//
// export default Main;
