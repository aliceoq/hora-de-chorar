function Item({ item, onCheck }) {
  return (
    <div>
      <input
        type='checkbox'
        onChange={(e) => onCheck(e.target.checked, item)}
      ></input>
      <div>{item.name}</div>
      {item.times.map((time) => (
        <div key={time}>
          {time.day}: {time.start}-{time.end}
        </div>
      ))}
    </div>
  );
}

export default Item;
