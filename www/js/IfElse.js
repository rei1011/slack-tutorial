import React from "react";

export default class IfElse extends React.Component {

  children;

  render() {
    this.children = "";

    if(this.props.test) {
      this.children = this.props.children[0];
    } else {
      this.children = this.props.children[1];
    }

    return (
      <React.Fragment>
        {this.children}
      </React.Fragment>
    );
  }
}