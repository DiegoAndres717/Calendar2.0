import { useCallback } from "react";
import { ButtonArrow } from "./buttons/ButtonArrow";
import { IconArrowRight } from "./icons/IconArrowRight";
import { IconArrowLeft } from "./icons/IconArrowLeft";

const CalendarNavigation = ({
  handleBackButtonClick,
  currentMonth,
  maxMonth,
  setCurrentMonth,
}) => {
  const handleNextMonthClick = useCallback(() => {
    setCurrentMonth((currentMonth) => {
      if (currentMonth === maxMonth) {
        return maxMonth;
      } else {
        const nextMonth = currentMonth + 1;
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
        return prevMonth;
      }
    });
  }, [setCurrentMonth]);

  return (
    <>
      <div className="w-[90%] h-16">
        <div className="flex flex-row justify-between">
          <ButtonArrow
            title="Regresar"
            icon={<IconArrowLeft />}
            iconPosition="after"
            btnStyle="p-2 bg-[#004a72] hover:bg-gradient-custom text-md md:text-lg text-white font-bold rounded-[7px] shadow border border-neutral-200"
            handleClick={handleBackButtonClick}
          />
          <div className="w-auto p-2 text-center text-sky-950 text-lg font-bold">
            Calendario {maxMonth} meses
          </div>
        </div>
        <div className="flex flex-row items-center justify-between md_media:translate-x-[18rem] md_media:-translate-y-[3.9rem] md_media:w-[50%] mt-4">
          {currentMonth && (
            <ButtonArrow
              title={`Anterior`}
              disabled={currentMonth === 1}
              handleClick={handlePrevMonthClick}
              icon={<IconArrowLeft />}
              iconPosition="after"
              btnStyle={`${
                currentMonth === 1 &&
                "bg-calendar-btn-custom-gray pointer-events-none text-gray-400"
              } p-2 text-md hover:bg-opacity-1 hover:bg-calendar-btn-custom-gray md:text-lg w-full bg-neutral-50 rounded-[7px] font-bold shadow border border-neutral-200`}
            />
          )}
          <div className="w-full p-2 flex items-center justify-center text-center text-sky-950 text-xl font-extrabold">
            Mes {currentMonth}
          </div>
          {currentMonth && (
            <ButtonArrow
              title={`Siguiente`}
              handleClick={handleNextMonthClick}
              icon={<IconArrowRight />}
              iconPosition="before"
              disabled={currentMonth === maxMonth}
              btnStyle={`${
                currentMonth === maxMonth &&
                "bg-calendar-btn-custom-gray pointer-events-none text-gray-400"
              } p-2 w-full text-md hover:bg-opacity-1 hover:bg-calendar-btn-custom-gray md:text-lg bg-neutral-50 rounded-[7px] font-bold shadow border border-neutral-200`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CalendarNavigation;
