export const getDuration = (lecciones) => {
	let totalMinutes = 0;
	for (let i = 0; i < lecciones.length; i++) {
		let topics = lecciones[i].topics;
		for (let j = 0; j < topics.length; j++) {
			const duration = topics[j].duration;
			if (typeof duration === 'string' && duration !== undefined) {
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
		return '';
	}
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${hours} h ${minutes} min`;
};
