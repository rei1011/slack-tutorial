import React from "react";
import { observer } from "mobx-react";

import ChannelState from "./ChannelState";
import If from "./If";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
      <div className="channel">
        <div className="channel_head">
          <FontAwesomeIcon className="show_list_button" icon={['fas', 'caret-right']} /> 
          <span>チャンネル</span>
          <If test={!this.channelState.editChannelMode}>
            <button className="create" onClick={this.startEditChannelMode.bind(this)}>
              <FontAwesomeIcon icon={['fa', 'plus']} />
            </button>
          </If>
        </div>
        <div className="new_channel">
          <If test={this.channelState.editChannelMode}>    
            <input type="text"></input>
            <button className="cancel" onClick={this.endEditChannelMode.bind(this)}>
              <FontAwesomeIcon icon={['fas', 'times']} />
            </button>
          </If>
        </div>
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



