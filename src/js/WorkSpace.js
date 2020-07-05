import React from "react";
import { observer } from "mobx-react";
import MessageState from "./MessageState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


@observer
export default class WorkSpace extends React.Component {

  messageState = new MessageState();

  onClick() {
    this.messageState.setMessage(this.refs.messageForm.value);
    this.refs.messageForm.value="";
    this.messageState.messageButtonIsShow(this.refs.messageForm.value);
  }

  onChange() {
    this.messageState.messageButtonIsShow(this.refs.messageForm.value);
  }

  render() {

    return (
      <div className="container">
        <div className="header">
          <span>slack-tutorial</span>
        </div>
        <div className="workspace">
          <div className="sidebar">
            <div className="account">
              <span>account</span>
            </div>
            <div className="group">
              <span>group</span>
            </div>
          </div>
          <div className="footer">
            <div className="message-are">
              <div className="display-message">
                {this.messageState.messageList.map(message => <p>{message}</p>)}
              </div>
              <div className="message-form">
                <textarea ref="messageForm"
                  className="textarea"
                  onChange={this.onChange.bind(this)} />
                <div className="operation">
                  <button onClick={this.onClick.bind(this)}
                    disabled={!this.messageState.messageEnterd}>
                    <FontAwesomeIcon className={"sendicon " + (this.messageState.messageEnterd ? "sendable" : "")} icon={['fas', 'paper-plane']} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}