export const CLASSES_PER_DAY = 9;

export function saveData(classes, schedule) {
  localStorage.setItem('classes', JSON.stringify(classes));
  localStorage.setItem('schedule', JSON.stringify(schedule));
}

function initClasses(number) {
  const day = new Array(number);
  for (let i = 0; i < number; i++) day[i] = [i];
  return day;
}

export const classesData = () => {
  const recovered = localStorage.getItem('classes');
  if (recovered) return JSON.parse(recovered);
  return [
    {
      name: 'Exemplo',
      times: [{ day: 'monday', start: '09:00', end: '10:00' }],
    },
  ];
};

export const scheduleData = () => {
  const recovered = localStorage.getItem('schedule');
  if (recovered) return JSON.parse(recovered);

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
