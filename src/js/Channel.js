import React from "react";
import { observer } from "mobx-react";

import ChannelState from "./ChannelState";
import If from "./If";


@observer
export default class Channel extends React.Component {

  channelState = new ChannelState();

  startEditChannelMode() {
    this.channelState.setEditChannelMode(true);
  }

  endEditChannelMode() {
    this.channelState.setEditChannelMode(false);
  }

  render() {
    return (
      <div className="group">
        <span>チャンネル</span>
        <button onClick={this.startEditChannelMode.bind(this)}>new</button>
        <button onClick={this.endEditChannelMode.bind(this)}>close</button>
        <If test={this.channelState.editChannelMode}>
          <input type="text"></input>
        </If>
      </div>
    );
  }
}


class ChannelList extends React.Component {
  
  render() {
    return (
      <p>group_1</p>
    );
  }
}



