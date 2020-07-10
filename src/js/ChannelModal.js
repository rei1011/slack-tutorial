import React from 'react';
import Modal from 'react-modal';
import { observer } from "mobx-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


Modal.setAppElement('#app')

@observer
export default class ChannelModal extends React.Component {
  
  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.props.channelModalState.close();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.channelModalState.modalIsShow}
        // onAfterOpen={this.afterOpenModal.bind(this)}
        onRequestClose={this.closeModal.bind(this)}
        className="create-channel-modal"
        overlayClassName="create-channel-overlay"
      >
        <div className="modal-header">
          <div className="modal-header-name">新規チャンネル作成</div>
          <button className="close-modal" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon={['fas', 'times']} /></button>
        </div>
        <div className="modal-body">
          <input className="new-class-name" type="text"></input>
        </div>
        <div className="modal-footer">
          <button className="create-channel">作成</button>
        </div>
      </Modal>
    );
  }
}