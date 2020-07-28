import React from "react";
import { observer } from "mobx-react";
import IfElse from "./IfElse";
import If from "./If";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChannelModal from "./ChannelModal";
import ChannelModalState from "./ChannelModalState"
import ChannelState from "./ChannelState";


@observer
export default class Channel extends React.Component {

  channelModalState = new ChannelModalState();
  channelState = new ChannelState();

  openModal() {
    this.channelModalState.open();
  }

  expandChannelList() {
    this.channelState.changeChannelListIsShow();
  }


  render() {
    return (
      <div className="channel" id="channel">
        <div className="channel_head">
          <div className="channel_head__main">
            <button onClick={this.expandChannelList.bind(this)}>
              <FontAwesomeIcon className={"show_list_button " + (this.channelState.channelListIsShow ? "show" : "")}
                icon={['fas', 'caret-right']} />
            </button>
            <span>チャンネル</span>
            <IfElse test={this.channelModalState.modalIsShow}>
              <div className="new_channel">
                <ChannelModal
                  channelModalState={this.channelModalState}
                  channelState={this.channelState} />
              </div>
              <button className="create" onClick={this.openModal.bind(this)}>
                <FontAwesomeIcon icon={['fa', 'plus']} />
              </button>
            </IfElse>
          </div>
        </div>
        <If test={this.channelState.channelListIsShow}>
          <div className="channel__list">
            {this.channelState.channelList.map(channel => <p>{channel}</p>)}
          </div>
        </If>
      </div>
    );
  }
}



