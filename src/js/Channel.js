import React from "react";
import { observer } from "mobx-react";
import IfElse from "./IfElse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChannelModal from "./ChannelModal";
import ChannelModalState from "./ChannelModalState"


@observer
export default class Channel extends React.Component {

  channelModalState = new ChannelModalState();

  openModal() {
    this.channelModalState.open();
  }

  render() {
    return (
      <div className="channel" id="channel">
        <div className="channel_head">
          <FontAwesomeIcon className="show_list_button" icon={['fas', 'caret-right']} /> 
          <span>チャンネル</span>
          <IfElse test={this.channelModalState.modalIsShow}>
            <div className="new_channel">
              <ChannelModal channelModalState={this.channelModalState}/>
            </div>
            <button className="create" onClick={this.openModal.bind(this)}>
              <FontAwesomeIcon icon={['fa', 'plus']} />
            </button>
          </IfElse>
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



