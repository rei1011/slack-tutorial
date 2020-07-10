import { action, observable } from "mobx";


export default class ChannelModalState {

  @observable modalIsShow = false;
  
  @action open() {
    this.modalIsShow = true;
  }

  @action close() {
    this.modalIsShow = false;
  }
}