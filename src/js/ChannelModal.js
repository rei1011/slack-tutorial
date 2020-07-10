import React from 'react';
import Modal from 'react-modal';
import { observer } from "mobx-react";

const customStyles = {
  content : {
    top                   : '70%',
    left                  : '70%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    height: '300px',
    height: '300px'
 }
};

Modal.setAppElement('#app')

@observer
export default class ChannelModal extends React.Component {
  
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.props.channelModalState.close();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.channelModalState.modalIsShow}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          className="create=channel-modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>ModalWindow</h2>
          <div>Opend</div>
            <button onClick={this.closeModal.bind(this)}>close</button>
        </Modal>
      </div>
    );
  }

}