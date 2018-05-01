import React from "react";
import MainArticle from './MainArticle';
import Image from "./Image";
import ReactDOM from 'react-dom'
import Tombstone from './Tombstone'

class TombstoneContainer extends React.Component {
  constructor(props){
    super(props)
  }

  displayInfo = () =>{
    return(
      <div>
        <h2>{this.props.title}</h2>
        <h4>{this.props.stat}</h4>
        <p>{this.props.info}</p>
      </div>
    )
  }

  render(){
    if(!this.props.facts){
      return null
    }
    const factNodes = this.props.facts.map((fact, index) => {return (
      <Tombstone onClick={this.displayInfo}
        key={fact.id}
        value={index+1}
        title={fact.title}
        stat={fact.stat}
        info={fact.information}
        image={fact.image}/>
      )
    });

    return (
      <div>
        {factNodes}
      </div>
    )
  }
};


export default TombstoneContainer;
