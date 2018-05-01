import React from "react";
import Replies from "../db/replies.js"


class Ask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      replies: Replies,
      selectedReply: null
    };

      this.handleAskClick = this.handleAskClick.bind(this);

  }

  handleAskClick(){
    var replyArray = this.state.replies;
    var picked = replyArray[Math.floor(Math.random()*replyArray.length)];

    this.setState({
      selectedReply: picked
    });
  }

  render(){
    return (
      <div>
        <button value="askPlagueDoc" onClick={this.handleAskClick}>Hey Plague Doctor! I think I've got the plague! What should I do?</button>
        <h3>{this.state.selectedReply}</h3>
      </div>
    )
  }





}







export default Ask;
