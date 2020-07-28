import { action, observable } from "mobx";

export default class ChannelState {

  @observable channelList = [];
  @observable newChannel = "";
  @observable channelListIsShow = true;
  
  @action open() {
    this.modalIsShow = true;
  }

  @action close() {
    this.modalIsShow = false;
  }

  @action setChannelList() {
    this.channelList.push(this.newChannel);
  }

  get channelList() {
    return this.channelList;
  }

  @action setNewChannel(channel) {
    this.newChannel = channel;
  }

  @action clearNewChannel() {
    this.newChannel = "";
  }

  @action changeChannelListIsShow() {
    this.channelListIsShow = !this.channelListIsShow;
  }
}