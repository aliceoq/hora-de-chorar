import { useState } from 'react';
import { days } from '../../data/data';
import { ItemContainer, TitleBox } from './List.style';

function Item({ item, onCheck, onDelete }) {
  const [checked, setChecked] = useState(item.selected);

  return (
    <ItemContainer>
      <TitleBox>
        <input
          type='checkbox'
          defaultChecked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
            onCheck(e.target.checked, item);
          }}
        />
        <span>{item.name}</span>
      </TitleBox>
      {item.times.map((time, index) => (
        <div key={index}>
          {days[time.day]}: {time.start}-{time.end}
        </div>
      ))}
      <button onClick={() => onDelete(item)}>Deletar</button>
    </ItemContainer>
  );
}

export default Item;
