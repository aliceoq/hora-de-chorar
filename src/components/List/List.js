import Item from './Item';
import { ListContainer } from './List.style';

function List({ itens, updateClass, deleteClass }) {
  return (
    <ListContainer>
      {itens.map((value, index) => (
        <Item
          key={index}
          item={value}
          onCheck={updateClass}
          onDelete={deleteClass}
        />
      ))}
    </ListContainer>
  );
}

export default List;
