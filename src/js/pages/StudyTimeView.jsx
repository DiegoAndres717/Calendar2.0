import { useLocalStorageFirst } from "../functions/useLocalStorage";
import MonthView from "./MonthView";
import { IconCalendar } from "../components/icons/IconCalendar";
import ProgressBar from "../components/ProgressBar";
import { calculateCompletion } from "../utilities/utilities";
import { ButtonArrow } from "../components/buttons/ButtonArrow";

const StudyTimeView = ({ title, months, setStudyTime }) => {
  const { totalTopics, percentCompletedPerMonth } = calculateCompletion(months);
  const [currentMonth, setCurrentMonth] = useLocalStorageFirst(
    "currentMonth",
    null
  );
  if (currentMonth !== null && currentMonth !== "") {
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
  const handleButtonClick = () => {
    setStudyTime(null); 
  };

  return (
    <>
      <div className="flex flex-col items-center p-10 bg-white w-full overflow-hidden text-center text-xl text-darkslategray-200 font-montserrat">
        <div className="mb-0 md:mb-6 mt-6 flex flex-wrap justify-center items-center">
          <p className="text-center text-xl md:text-4xl font-black inline-block">
            Tu cronograma de estudio
          </p>
          <ButtonArrow 
            handleClick={handleButtonClick}
            title={'Cambiar duración cronograma'}
            btnStyle={'md:translate-x-10 rounded-[7px] mt-2 md:mt-0 text-xs bg-[#012B4B] border border-solid border-[#E4E4E4] shadow-custom font-black text-white w-44 h-10'}
            />
        </div>
        <div className="w-full mt-4">
          <ProgressBar lecciones={months.flatMap(month => month.days)} totalTemas={totalTopics} />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 place-items-center">
          {months?.map((month, index) => (
            <div
              key={index}
              onClick={() => handleMonthClick(index)}
              className={`flex flex-col justify-center items-center rounded-xl w-60 h-52 cusor-pointer ${percentCompletedPerMonth[index] >= 100 ? 'p-1 border border-solid border-calendar_color_blue-300 [background:linear-gradient(202.92deg,_#06566f,_#00aea9)]' : 'bg-whitesmoke-100 shadow-[0px_4px_10px_-1px_rgba(0,_0,_0,_0.25)]'}`}
            >
              <IconCalendar className={`h-16 w-16 ${percentCompletedPerMonth[index] >= 100 ?  'text-white': 'text-[#008C90]'}`} />
              <div className={`font-semibold ${percentCompletedPerMonth[index] >= 100 ? 'text-white mix-blend-normal' : 'mix-blend-normal'}`}>
                {month.label}
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center cursor-pointer rounded-xl w-60 h-52 bg-whitesmoke-100 shadow-[0px_4px_10px_-1px_rgba(0,_0,_0,_0.25)]">
            <IconCalendar className="h-16 w-16 text-[#008C90]" />
            <div className="font-semibold mix-blend-normal">Mes 1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyTimeView;
