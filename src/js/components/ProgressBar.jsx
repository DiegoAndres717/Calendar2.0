import React, { useMemo } from 'react';

const ProgressBar = ({ currentMonth, lecciones, totalTemas }) => {
  
	
	const temasCompletados = useMemo(() => {
		return lecciones.reduce(
			(total, leccion) =>
				total +
				(leccion.topics?.filter((topic) => topic.completed).length ??
					0),
			0
		);
	}, [lecciones]);

	const progressPercentage = Math.round(
		(temasCompletados / totalTemas) * 100
	);
	return (
		<div
			className={`cb__progress-bar ${
				currentMonth ? 'progress-container' : ''
			}`}
		>
			<div
				className={`progress ${progressPercentage === 0 ? 'none':''}`}
				style={{ width: `${progressPercentage}%` }}
			>
				{`${progressPercentage}%`}
			</div>
		</div>
	);
};

export default ProgressBar;
