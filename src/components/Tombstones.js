import React from "react";
import MainArticle from './MainArticle';
import Image from "./Image";
import ReactDOM from 'react-dom'

class Tombstones extends React.Component {
  handleButtonClick = (event) => {
    this.props.onFactSelected(event.target.value);
  }

  render(){
    let buttons = (
      <React.Fragment>
        <button value="0" onClick={this.handleButtonClick}>Fact 0</button>
        <button value="1" onClick={this.handleButtonClick}>Fact 1</button>
      </React.Fragment>
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
          {this.props.fact.title}
        </article>
      </React.Fragment>
    )
  }
};


export default Tombstones;
