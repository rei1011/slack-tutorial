import { action, observable } from "mobx";

export default class MessageState {

  @observable messageList=[];

  @action setMessage(message) {
    this.messageList.push(message);
  }
}