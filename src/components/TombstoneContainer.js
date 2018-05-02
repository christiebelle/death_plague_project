import React from "react";
import MainArticle from './MainArticle';
import Tombstone from './Tombstone'

class TombstoneContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deathCount: 0
    }
  }

  addToDeathCount(){
    if(this.state.deathCount <= 91){
      this.setState((prevState) => ({deathCount: prevState.deathCount + 10}))
    }
  }

    handleButtonClick = (event) => {
    this.props.onFactSelected(event.target.value);
    this.addToDeathCount();
  }

  render(){
    if(!this.props.facts){
      return null
    }
    let buttons = this.props.facts.map( (fact, index) => {return (
      <button className="tombstone-button" data-balloon={fact.fact} data-balloon-pos="up" onClick={this.handleButtonClick} key={index} value={index}>{index}</button>
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
      <div className="container">
        {buttons}
        <article className="text-wrapper">
        <div className="text-content">
          <h1>{this.props.fact.title}</h1>
          <p>{this.props.fact.information}</p>
        </div>
        <div className="image-content">
          <p><img className="stretch" src={'../images/'+this.props.fact.image} /></p>
        </div>
        </article>
        </div>
        <h1>Death Toll: {this.state.deathCount} Million</h1>
      </React.Fragment>
    )
  }
};

export default TombstoneContainer;
