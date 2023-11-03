import React from 'react';
import { useLocalStorageFirst } from '../functions/useLocalStorage';
import MonthView from './MonthView';
import CalendarNavigation from '../components/CalendarNavigation';
import { getDuration } from '../utilities/utilities';

const StudyTimeView = ({ title, months, setStudyTime }) => {
	const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
		'currentMonth',
		null
	);
	if (currentMonth !== null && currentMonth !== '') {
		return (
    <MonthView
        studyTime={title}
				days={months[currentMonth].days}
				numMonths={months.length}
				setCurrentMonth={setCurrentMonth}
				currentMonth={currentMonth}
			/>
		);
	}
	const handleMonthClick = (index) => {
		setCurrentMonth(index);
	};

	const handleBackButtonClick = () => {
		setStudyTime(null);
		return;
	};

	return (
		<>
    	<div className="cb__container">
      <CalendarNavigation title={ title } handleBackButtonClick={handleBackButtonClick}/>
      <div className="cb__card">
        <h2 className="title">Selecciona el mes que estás estudiando actualmente</h2>
        <div className="cb__months">
        {months?.map((month, index) => (
          <button
          key={index}
          onClick={() => handleMonthClick(index)}
          className="card-button"
          >
            <div>{month.label}</div>
            <div className="text-xs">{month.days.length} días de estudio</div>
            <div className="text-xs">{getDuration(month.days)}</div>
        </button>
        ))}
        </div>
        </div>
      </div>
		</>
	);
};

export default StudyTimeView;
