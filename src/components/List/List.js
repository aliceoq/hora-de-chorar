import Item from './Item';

function List({ itens, updateSchedule }) {
  return (
    <div>
      {itens.map((value) => (
        <Item key={value} item={value} onCheck={updateSchedule}></Item>
      ))}
    </div>
  );
}

export default List;
