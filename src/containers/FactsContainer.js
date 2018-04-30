import React from "react";

class FactsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'default title',
      fact: 'default fact',
      information: 'default info'
    }
  }

  render() {
    return(
      <p>this is the facts container</p>
    );
  }

}

export default FactsContainer;
