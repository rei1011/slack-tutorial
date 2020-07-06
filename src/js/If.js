import React from "react";
import { observable } from "mobx";

export default class If extends React.Component {

  children;

  render() {
    this.children = "";
    
    if(this.props.test) {
      this.children = this.props.children;
    }

    return (
      <div className="input_channel_name">
        {this.children}
      </div>
    );
  }
}