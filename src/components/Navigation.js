import React from "react";
import TombstoneContainer from "./TombstoneContainer"

const Navigation = () => (
 // Tombstones go here.
 <TombstoneContainer
            onFactSelected = {this.handleSelectedFactChanged}
            fact = {this.state.selectedFact}
            facts ={this.state.facts}
          />
)




export default Navigation;
