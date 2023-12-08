import { Button } from 'antd';

//mobx
import { observer } from 'mobx-react-lite';
import IndexStore from '../../store';

const Demo = () => {
  const changeName = () => {
    IndexStore.setCurrName('新名字');
  };
  return (
    <div className="main-wrapper">
      <div className="name-box">{IndexStore.currName}</div>
      <Button onClick={changeName}>点击改变name</Button>
    </div>
  );
};
export default observer(Demo);
