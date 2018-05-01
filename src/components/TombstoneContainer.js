import React from "react";
import MainArticle from './MainArticle';
import Image from "./Image";
import ReactDOM from 'react-dom'
import Tombstone from './Tombstone'

class TombstoneContainer extends React.Component {
  constructor(props){
    super(props)
  }
  // handleButtonClick = (event) => {
  //   this.props.onFactSelected(event.target.value);
  // }

  render(){
    if(!this.props.facts){
      return null
    }
    const factNodes = this.props.facts.map((fact, index) => {return (
    <Tombstone
      value={index+1}
      title={fact.title}
      stat={fact.stat}
      info={fact.information}
      image={fact.image}/>)
    });

    return (
      <div>
        {factNodes}
      </div>
    )
  }
};


export default TombstoneContainer;
