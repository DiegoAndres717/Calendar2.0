import React, { useCallback } from 'react';

const CalendarNavigation = ({children, title, handleBackButtonClick, currentMonth, maxMonth, setCurrentMonth }) => {
	const handleNextMonthClick = useCallback(() => {
		setCurrentMonth((currentMonth) => {
			if (currentMonth === maxMonth) {
				return maxMonth;
			} else {
				const nextMonth = currentMonth + 1;
				setCurrentMonth(nextMonth - 1);
				return nextMonth;
			}
		});
	}, [maxMonth, setCurrentMonth]);

	const handlePrevMonthClick = useCallback(() => {
		setCurrentMonth((currentMonth) => {
			if (currentMonth === 0) {
				return 0;
			} else {
				const prevMonth = currentMonth - 1;
				setCurrentMonth(prevMonth - 1);
				return prevMonth;
			}
		});
	}, [setCurrentMonth]);

	return (
    <div className="cb__navegacion"> 
    { (handleBackButtonClick || (currentMonth && currentMonth !== 1) || currentMonth !== maxMonth) && 
      <nav aria-label="Navegación">    
        <ul>    
              { handleBackButtonClick && 
            <li>
            <button
                className="cb__button"
                onClick={handleBackButtonClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <span>
                  Regresar
                </span>
              </button>    
            </li>
            }
        </ul>
        <ul>
          { currentMonth && currentMonth !== 1 &&
          <li>
            <button
            className="cb__button"
              onClick={handlePrevMonthClick}
              disabled={currentMonth === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>
                Ir a mes {currentMonth - 1}
              </span>
            </button>
          </li>
          }
          { currentMonth !== maxMonth &&
          <li>
            <button
            className="cb__button icon-right"
              onClick={handleNextMonthClick}
            >
              <span>
              Ir a mes {currentMonth + 1}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </li>
          }  
        </ul>
      </nav>
}
      <div className="cb__navigation-details">
      { title != "" && <h2>{title}</h2>}
      { children }
      </div>
    </div>
	);
};

export default CalendarNavigation;
