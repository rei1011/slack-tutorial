import React from "react";

export default class If extends React.Component {

  children;

  render() {
    this.children = "";

    if(this.props.test) {
      this.children = this.props.children;
    }

    return (
      <React.Fragment>
        {this.children}
      </React.Fragment>
    );
  }
}