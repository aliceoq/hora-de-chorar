import { CLASSES_PER_DAY, START_HOUR } from '../../data/data';
import { StyledTable, TableData, TableHeader, TableHeaderTime } from './Table.style';

function Table({ schedule }) {
  const range = Array.apply(0, Array(CLASSES_PER_DAY));
  const days = Object.keys(schedule);

  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHeaderTime>horário</TableHeaderTime>
          {days.map((day, index) => (
            <TableHeader key={index}>{schedule[day].name}</TableHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {range.map((el, index) => (
          <tr key={index}>
            <TableData key={index}>{START_HOUR + index}</TableData>
            {days.map((day, id) => (
              <TableData key={id}>{schedule[day].classes[index].toString()}</TableData>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
