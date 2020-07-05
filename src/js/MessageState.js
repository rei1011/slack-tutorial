import { action, observable } from "mobx";

export default class MessageState {

  @observable messageEnterd = false;
  @observable messageList = [];

  @action setMessage(message) {
    this.messageList.push(message);
  }

  messageButtonIsShow(message) {
    this.messageEnterd = message ? true : false;
  }
}