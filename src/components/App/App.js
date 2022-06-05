import Table from '../Table/Table';
import { useEffect, useMemo, useState } from 'react';
import { classesData, getSchedule, saveData } from '../../data/data';
import './App.css';
import Editor from '../Editor/Editor';
import List from '../List/List';

function App() {
  const [classes, setClasses] = useState(classesData);
  const schedule = useMemo(() => getSchedule(classes), [classes]);

  useEffect(() => saveData(classes), [classes]);

  function addClass(newClass) {
    setClasses([...classes, newClass]);
  }

  function updateClass(selected, updatedClass) {
    const index = classes.findIndex((el) => el === updatedClass);
    classes[index].selected = selected;
    setClasses([...classes]);
  }

  function deleteClass(deletedClass) {
    const index = classes.findIndex((el) => el === deletedClass);
    classes.splice(index, 1);
    setClasses([...classes]);
  }

  return (
    <div className='App'>
      <h1>hora de chorar</h1>
      <Table schedule={schedule}></Table>
      <Editor schedule={schedule} classes={classes} addClass={addClass} />
      <List
        itens={classes}
        updateClass={updateClass}
        deleteClass={deleteClass}
      />
    </div>
  );
}

export default App;
