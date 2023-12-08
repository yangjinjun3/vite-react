import { action, configure, makeObservable, observable } from 'mobx';
configure({ enforceActions: 'observed', useProxies: 'never' });

export default class CommonStore {
  currName = '初始化名字';
  constructor() {
    makeObservable(this, {
      currName: observable,
      setCurrName: action
    });
  }
  setCurrName(name: string) {
    this.currName = name;
  }
}