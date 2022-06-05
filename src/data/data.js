export const CLASSES_PER_DAY = 9; // Quantidade de blocos por dia
export const START_HOUR = 8; // Início
export const END_HOUR = 17; // Início

export function saveData(classes, schedule) {
  localStorage.setItem('classes', JSON.stringify(classes));
  localStorage.setItem('schedule', JSON.stringify(schedule));
}

function initClasses(number) {
  const day = new Array(number);
  for (let i = 0; i < number; i++) day[i] = [];
  return day;
}

export const classesData = () => {
  const recovered = localStorage.getItem('classes');
  if (recovered) return JSON.parse(recovered);
  return [
    {
      name: 'Exemplo 1',
      times: [{ day: 'monday', start: '09:00', end: '10:00' }],
      selected: false,
    },
    {
      name: 'Exemplo 2',
      times: [{ day: 'monday', start: '09:00', end: '10:00' }],
      selected: true,
    },
  ];
};

export const days = {
  monday: 'segunda',
  tuesday: 'terça',
  wednesday: 'quarta',
  thursday: 'quinta',
  friday: 'sexta',
};

export const scheduleData = () => {
  return {
    monday: {
      name: 'segunda',
      classes: initClasses(CLASSES_PER_DAY),
    },
    tuesday: {
      name: 'terça',
      classes: initClasses(CLASSES_PER_DAY),
    },
    wednesday: {
      name: 'quarta',
      classes: initClasses(CLASSES_PER_DAY),
    },
    thursday: {
      name: 'quinta',
      classes: initClasses(CLASSES_PER_DAY),
    },
    friday: {
      name: 'sexta',
      classes: initClasses(CLASSES_PER_DAY),
    },
  };
};

export function getSchedule(classes) {
  const schedule = scheduleData();

  if (classes)
    classes.forEach((value) => {
      if (value.selected) {
        value.times.forEach((element) => {
          const classesDay = schedule[element.day].classes;
          const startIndex = parseInt(element.start) - START_HOUR;
          const endIndex = parseInt(element.end) - START_HOUR;

          for (let i = startIndex; i < endIndex; i++)
            classesDay[i].push(value.name);
        });
      }
    });

  return schedule;
}
