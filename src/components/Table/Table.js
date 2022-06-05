import { useEffect, useState } from 'react';
import { classesData, saveData, scheduleData } from '../../data/data';
import Editor from '../Editor/Editor';
import List from '../List/List';
import './Table.css';

function Table() {
  const [schedule, setSchedule] = useState(scheduleData);
  const [classes, setClasses] = useState(classesData);

  useEffect(() => saveData(classes, schedule), [classes, schedule]);

  function addClass(newClass) {
    setClasses([...classes, newClass]);
  }

  function updateSchedule(add, newClass) {
    newClass.times.forEach((element) => {
      const classesDay = schedule[element.day].classes;
      const startIndex = parseInt(element.start) - 8;
      const endIndex = parseInt(element.end) - 8;

      for (let i = startIndex; i < endIndex; i++) {
        if (add) classesDay[i].push(newClass.name);
        else {
          const index = classesDay[i].findIndex((el) => el === newClass.name);
          classesDay[i].splice(index, 1);
        }
      }
    });

    setSchedule({ ...schedule });
  }

  return (
    <div>
      <div className='Table'>
        {Object.keys(schedule).map((day, index) => (
          <div key={day}>
            {schedule[day].name}
            <div key={day + 'schedule'} className='Day'>
              {schedule[day].classes.map((value, index) => (
                <div key={day + index}>{value}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Editor schedule={schedule} classes={classes} addClass={addClass} />
      <List itens={classes} updateSchedule={updateSchedule} />
    </div>
  );
}

export default Table;
