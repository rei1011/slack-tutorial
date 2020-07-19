import React from 'react';
import Modal from 'react-modal';
import { observer } from "mobx-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChannelState from "./ChannelState";


Modal.setAppElement('#app')

@observer
export default class ChannelModal extends React.Component {

  channelState = this.props.channelState;
  channelModalState = this.props.channelModalState;

  closeModal() {
    this.channelModalState.close();
    this.channelState.clearNewChannel();
  }

  createChannel() {
    this.channelState.setChannelList();
    this.closeModal();
  }

  onChangeNewChannel(event) {
    this.channelState.setNewChannel(event.target.value);
  }

  render() {
    return (
      <Modal
        isOpen={this.channelModalState.modalIsShow}
        onRequestClose={this.closeModal.bind(this)}
        className="create-channel-modal"
        overlayClassName="create-channel-overlay"
      >
        <div className="modal-header">
          <div className="modal-header-name">新規チャンネル作成</div>
          <button className="close-modal" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon={['fas', 'times']} /></button>
        </div>
        <div className="modal-body">
          <input className="new-class-name"
            type="text"
            value={this.channelState.newChannel}
            onChange={this.onChangeNewChannel.bind(this)}
          />
        </div>
        <div className="modal-footer">
          <button className="create-channel" onClick={this.createChannel.bind(this)}>
            作成
          </button>
        </div>
      </Modal>
    );
  }
}