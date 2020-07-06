import { action, observable } from "mobx";

export default class ChannelState {

  @observable channelMap = {};
  @observable editChannelMode = false;

  @action setEditChannelMode(mode) {
    this.editChannelMode = mode;
  }

}