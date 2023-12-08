import { configure } from 'mobx';
configure({ enforceActions: 'observed', useProxies: 'never' });
import CommonStore from './common';
class IndexStore extends CommonStore {
  constructor() {
    super();
  }
}
export default new IndexStore();