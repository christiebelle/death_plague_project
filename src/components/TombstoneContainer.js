import React from "react";
import MainArticle from './MainArticle';
import Tombstone from './Tombstone'

class TombstoneContainer extends React.Component {
    handleButtonClick = (event) => {
    this.props.onFactSelected(event.target.value);
  }

  render(){
    if(!this.props.facts){
      return null
    }
    let buttons = this.props.facts.map( (fact, index) => {return (
      <button onClick={this.handleButtonClick} key={fact.id} value={index} title={fact.fact} stat={fact.stat} info={fact.information} image={fact.image}>{index}</button>
      );
  }
  );
    if(!this.props.fact){
      return (
        buttons
      );
    }

    return (
      <React.Fragment>
        {buttons}
        <article>
          <h1>{this.props.fact.title}</h1>
          <p>{this.props.fact.information}</p>
        </article>
      </React.Fragment>
    )
  }
};

export default TombstoneContainer;
