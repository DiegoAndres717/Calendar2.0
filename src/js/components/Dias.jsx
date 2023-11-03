import React, { useCallback, useEffect, useState } from 'react';
import Buttons from './Buttons';

const Dias = ({ lecciones = [], setCurrentMonth }) => {
	const [selectedDay, setSelectedDay] = useState(0);
	const [showMore, setShowMore] = useState(false);
	const [visibleLessons, setVisibleLessons] = useState([]);
	const [selectedBoxes, setSelectedBoxes] = useState([]);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		setVisibleLessons(lecciones.slice(0, 10));
	}, [lecciones]);

	const handleDropdownClick = (index) => {
		if (selectedDay === index) {
			setSelectedDay(null);
		} else {
			setSelectedDay(index);
		}
	};

	const handleShowMoreThemes = (start, end) => {
		setShowMore(end > 10);
		setVisibleLessons(lecciones.slice(start, end));
	};

	const handleBoxClick = useCallback(
		(index) => {
			const isSelected = selectedBoxes.includes(index);
			if (!isSelected) {
				setSelectedBoxes([...selectedBoxes, index]);
				setProgress(progress + 1);
			} else {
				setSelectedBoxes(
					selectedBoxes.filter((item) => item !== index)
				);
				setProgress(progress - 1);
			}
		},
		[selectedBoxes, progress]
	);
	return (
		<>
    <Buttons
				showMore={showMore}
				lecciones={lecciones}
				setCurrentMonth={setCurrentMonth}
				handleShowMoreThemes={handleShowMoreThemes}
			/>
      <div className="cb__days">
			{visibleLessons.map((leccion, index) => (
				<div className="cb__day" key={index}>
					<div
						className="cb__day-header"
						onClick={() => handleDropdownClick(index)}
					>
						<span>{leccion.label}</span>
						<span className={`arrow-icon ${selectedDay === index ? 'selected' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

							
						</span>
					</div>
					{selectedDay === index && (
						<div className="cb__day-details">
							{leccion.topics
								.filter((tema) => tema.title !== '')
								.map((tema) => (
                  <a
										href={tema.url}
										target="_blank"
										className={`${selectedBoxes.includes(tema.ID) ||
											tema.completed
												? 'completed'
												: ''
										}`}
										key={
											tema.ID +
											Math.random().toString(10).slice(2)
										}
										onClick={() => handleBoxClick(tema.ID)}
									>
										<h2>{tema.title}</h2>
                    {tema.duration !== "" && 
										<p>{tema.duration}</p>
                    }
                    {tema.completed && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  }
									</a>
								))}
						</div>
					)}
				</div>
			))}
      </div>
			<Buttons
				showMore={showMore}
				lecciones={lecciones}
				setCurrentMonth={setCurrentMonth}
				handleShowMoreThemes={handleShowMoreThemes}
			/>
		</>
	);
};

export default Dias;
