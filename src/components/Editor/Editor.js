import { useMemo, useState } from 'react';

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
    <div>
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <button disabled={disableAddClass} onClick={() => handleClickClass()}>
        Adicionar disciplina
      </button>
      <div>
        {times.map((time) => (
          <div>
            {time.day}: {time.start}-{time.end}
          </div>
        ))}
      </div>
      <select
        value={time.day}
        onChange={(event) => setTime({ ...time, day: event.target.value })}
      >
        {Object.keys(schedule).map((day) => (
          <option key={day + 'option'} value={day}>
            {schedule[day].name}
          </option>
        ))}
      </select>
      <input
        type='time'
        value={time.start}
        onChange={(event) =>
          setTime({
            ...time,
            start: event.target.value.split(':')[0] + ':00',
          })
        }
      ></input>
      <input
        type='time'
        value={time.end}
        onChange={(event) =>
          setTime({ ...time, end: event.target.value.split(':')[0] + ':00' })
        }
      ></input>
      <button disabled={disableAddTime} onClick={() => addTime()}>
        Adicionar horário
      </button>
    </div>
  );
}

export default Editor;
