import { useEffect, useState } from "react";
import StudyTimeView from "./pages/StudyTimeView";
import { useLocalStorageCalendario } from "./functions/useLocalStorage";
import "../../dist/Calendar.css";

const Calendario = () => {
  const [studyTimes, setStudyTimes] = useState(null);
  const [studyTime, setStudyTime] = useLocalStorageCalendario(
    "study_time",
    null
  );

  useEffect(() => {
    fetch("/topics.json")
      .then((response) => response.json())
      .then((data) => setStudyTimes(data))
      .catch((error) => console.error(error));
  }, []);

  if (!studyTimes) {
    return null;
  }
  if (studyTime !== null && studyTime !== "") {
    return (
      <StudyTimeView
        title={studyTimes[studyTime].label}
        months={studyTimes[studyTime].months}
        setStudyTime={setStudyTime}
      />
    );
  }
  return (
    <div className="flex justify-center items-center">
      <div className="p-8 rounded-3xl border border-solid border-[#f1f1f1]">
        <h2 className="title">¿En cuánto tiempo quieres finalizar tu curso?</h2>
        <article className="cb__study-times">
          {studyTimes.map((studyTime, index) => {
            return (
              <button
                disabled={!studyTime.disabled ? true : false}
                key={index}
                onClick={() => setStudyTime(index)}
                className={`${
                  !studyTime.disabled ? "card-button disabled" : "card-button"
                }`}
              >
                <span>{studyTime.label}</span>
                <p>{!studyTime.disabled && `${studyTime?.disabled_message}`}</p>
              </button>
            );
          })}
        </article>
        <article className="container flex justify-center items-center mx-auto p-4">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-[#00b7b5] text-clamp font-bold mb-2">
                ¿En cuántos meses quieres hacer nuestro curso?
              </label>
              <div className="relative">
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="meses"
                >
                  <option value="" disabled selected>
                    -- Seleccionar mes --
                  </option>
                  <option value="1">Mes 1</option>
                  <option value="2">Mes 2</option>
                  <option value="3">Mes 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Enviar
              </button>
            </div>
          </form>
        </article>
      </div>
    </div>
  );
};

export default Calendario;
