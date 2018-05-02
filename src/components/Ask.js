import React from "react";
import Replies from "../db/replies.js"


class Ask extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      replies: Replies,
      selectedReply: null
      // null
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
      <section className="container">
        <article className="doc-wrapper">
          <div>
            <button className="doc-button" value="askPlagueDoc" onClick={this.handleAskClick}>Hey Plague Doctor! I think I've got the plague! What should I do?</button></div>
          <div className="doc-text">
            <h1 className="doc-h1">Hey Plague Doctor! </h1>
            <p className="doc-p">I think I've got the plague! What should I do?</p>
            <h2 className="doc-h2">{this.state.selectedReply}</h2></div>
        </article>
      </section>
    )
  }





}


export default Ask;
