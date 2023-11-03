import React from 'react';
import { getDuration } from '../utilities/utilities';
const  MonthSummary = ({ totalTemas, lecciones }) => {
	return (
    <div className="cb__summary">
      {totalTemas} lecciones | {lecciones.length} días de estudio | {getDuration(lecciones)}
    </div>
	);
};

export default  MonthSummary;
