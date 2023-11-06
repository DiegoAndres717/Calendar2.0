import { useEffect, useMemo, useState } from "react";
import Dias from "../components/Dias";
import ProgressBar from "../components/ProgressBar";
import Spinner from "../components/Spinner";
import CalendarNavigation from "../components/CalendarNavigation";

const DayView = ({ setCurrentMonth, currentMonth, days, numMonths }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lecciones, setLecciones] = useState([]);
  currentMonth += 1;

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
    setCurrentMonth("");
    return;
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="py-12 px-4">
          <div className="flex justify-center items-center">
            <CalendarNavigation
              handleBackButtonClick={handleBackButtonClick}
              currentMonth={currentMonth}
              maxMonth={numMonths}
              setCurrentMonth={setCurrentMonth}
            />
          </div>
          <div className="mt-12 xl:mt-0">
            <ProgressBar
              lecciones={lecciones}
              totalTemas={totalTemas}
            />
          </div>

          <Dias lecciones={lecciones} setCurrentMonth={setCurrentMonth} />
        </div>
      )}
    </>
  );
};

export default DayView;
