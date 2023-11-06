export const getDuration = (lecciones) => {
  let totalMinutes = 0;
  for (let i = 0; i < lecciones.length; i++) {
    let topics = lecciones[i].topics;
    for (let j = 0; j < topics.length; j++) {
      const duration = topics[j].duration;
      if (typeof duration === "string" && duration !== undefined) {
        let match = duration.match(/(\d+) h (\d+) min/);
        if (match) {
          const hours = parseInt(match[1]);
          const minutes = parseInt(match[2]);
          totalMinutes += hours * 60 + minutes;
        }
      }
    }
  }

  if (totalMinutes === 0) {
    return "";
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours} h ${minutes} min`;
};

// Calcula el total de temas y el total de temas completados por mes
export const calculateCompletion = (months) => {
  let totalTopics = 0;
  let percentCompletedPerMonth = [];

  for (let month of months) {
    let totalTopicsPerMonth = 0;
    let totalCompletedPerMonth = 0;

    for (let day of month.days) {
      for (let topic of day.topics) {
        totalTopics++;
        totalTopicsPerMonth++;

        if (topic.completed) {
          totalCompletedPerMonth++;
        }
      }
    }

    let percentCompleted = (totalCompletedPerMonth / totalTopicsPerMonth) * 100;
    percentCompletedPerMonth.push(percentCompleted);
  }

  return { totalTopics, percentCompletedPerMonth };
};
