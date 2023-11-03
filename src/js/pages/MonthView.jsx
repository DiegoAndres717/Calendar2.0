import React, { useEffect, useMemo, useState } from 'react';
import Dias from '../components/Dias';
import ProgressBar from '../components/ProgressBar';
import Spinner from '../components/Spinner';
import CalendarNavigation from '../components/CalendarNavigation';
import MonthSummary from '../components/MonthSummary';

const DayView = ({ studyTime, setCurrentMonth, currentMonth, days, numMonths }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [lecciones, setLecciones] = useState([]);
	currentMonth += 1;
	const maxMonths = { 4: 4, 6: 6, 11: 11 };
	const maxMonth = maxMonths[numMonths] || null;

	useEffect(() => {
		setIsLoading(true);
		setLecciones(days);
		setIsLoading(false);
	}, [days]);

	const totalTemas = useMemo(() => {
		return lecciones.reduce(
			(total, leccion) => total + (leccion.topics?.length ?? 0),
			0
		);
	}, [lecciones]);
  const handleBackButtonClick = () => {
		setCurrentMonth('');
		return;
	};
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="cb__container">
					<div className="container-two">
            <CalendarNavigation title={`${studyTime} / Mes ${currentMonth}`} handleBackButtonClick={handleBackButtonClick} currentMonth={currentMonth}
							maxMonth={maxMonth}
							setCurrentMonth={setCurrentMonth}>
                <MonthSummary
                  totalTemas={totalTemas}
                  lecciones={lecciones}
                />
                <ProgressBar
                  currentMonth={currentMonth}
                  lecciones={lecciones}
                  totalTemas={totalTemas}
                />
              </CalendarNavigation>						
					</div>
					
					<Dias
						lecciones={lecciones}
						setCurrentMonth={setCurrentMonth}
					/>
				</div>
			)}
		</>
	);
};

export default DayView;
