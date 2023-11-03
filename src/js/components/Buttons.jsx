import React from 'react';

const Buttons = ({
	showMore,
	handleShowMoreThemes,
	lecciones
}) => {
	const maxLecciones = 10;
	const buttonText = showMore
		? 'Ir a días 1 - 10'
		: 'Ir a días 10 - ' + lecciones.length;
	const buttonAction = showMore
		? () => handleShowMoreThemes(0, 10)
		: () => handleShowMoreThemes(10, lecciones.length);

	return (<div className="cb__days-pagination">
			{lecciones.length >= maxLecciones && (
        <button
          className={`cb__button ${!showMore ? 'icon-right': ''}`}
          onClick={buttonAction}
        >
          {showMore && 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          }
          <span>{buttonText}</span>
          {!showMore && 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          }
        </button>
			)}
		</div>);
};

export default Buttons;
