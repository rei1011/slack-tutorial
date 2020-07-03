import React from "react";
import { observer } from "mobx-react";
import MessageState from "./MessageState";

@observer
export default class WorkSpace extends React.Component {

  messageState = new MessageState();

  onClick() {
    this.messageState.setMessage(this.refs.messageForm.value);
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
          <div className="message-are">
            <div className="display-message">
              {this.messageState.messageList.map(message => <p>{message}</p>)}
            </div>
            <div className="message-form">
              <textarea ref="messageForm" name="message" rows="4" cols="40"></textarea>
              <button onClick={this.onClick.bind(this)}>message</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}