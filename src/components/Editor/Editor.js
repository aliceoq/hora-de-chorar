import { useMemo, useState } from 'react';
import { days } from '../../data/data';
import {
  Button,
  EditorContainer,
  Input,
  NameContainer,
  Select,
  TimeList,
  TimeSelectorContainer,
  Title,
} from './Editor.style';

function Editor({ schedule, classes, addClass }) {
  const [name, setName] = useState('');
  const [time, setTime] = useState({
    day: 'monday',
    start: '08:00',
    end: '09:00',
  });
  const [times, setTimes] = useState([]);

  const disableAddClass = useMemo(() => {
    let disable = false;

    if (name.length <= 0) disable = true;
    else if (classes.find((el) => el.name === name)) disable = true;

    if (times.length <= 0) disable = true;
    //Checar intervalos

    return disable;
  }, [name, times, classes]);

  const disableAddTime = useMemo(() => {
    const start = parseInt(time.start) - 8;
    const end = parseInt(time.end) - 8;

    if (start < end && start >= 0 && end <= 17) return false;
    else return true;
  }, [time]);

  function addTime() {
    setTime({ day: '', start: '', end: '' });
    setTimes([...times, time]);
  }

  function handleClickClass() {
    setName('');
    setTimes([]);
    setTime({ day: 'monday', start: '', end: '' });
    addClass({ name: name, times: times });
  }

  return (
    <EditorContainer>
      <Title>adicionar disciplina</Title>
      <NameContainer>
        <Input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button disabled={disableAddClass} onClick={() => handleClickClass()}>
          Adicionar disciplina
        </Button>
      </NameContainer>
      <TimeList>
        {times.map((time) => (
          <div>
            {days[time.day]}: {time.start}-{time.end}
          </div>
        ))}
      </TimeList>
      <TimeSelectorContainer>
        <Select
          value={time.day}
          onChange={(event) => setTime({ ...time, day: event.target.value })}
        >
          {Object.keys(schedule).map((day, index) => (
            <option key={index} value={day}>
              {schedule[day].name}
            </option>
          ))}
        </Select>
        <Input
          type='time'
          value={time.start}
          onChange={(event) =>
            setTime({
              ...time,
              start: event.target.value.split(':')[0] + ':00',
            })
          }
        />
        <Input
          type='time'
          value={time.end}
          onChange={(event) =>
            setTime({ ...time, end: event.target.value.split(':')[0] + ':00' })
          }
        />
        <Button disabled={disableAddTime} onClick={() => addTime()}>
          Adicionar horário
        </Button>
      </TimeSelectorContainer>
    </EditorContainer>
  );
}

export default Editor;
