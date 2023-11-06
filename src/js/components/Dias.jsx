import { useCallback, useState } from "react";
import { Pagination } from "./Pagination";

const Dias = ({ lecciones = []}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleTopicClick = useCallback(
    (index) => {
      const isSelected = selectedTopic.includes(index);
      if (!isSelected) {
        setSelectedTopic([...selectedTopic, index]);
        setProgress(progress + 1);
      } else {
        setSelectedTopic(selectedTopic.filter((item) => item !== index));
        setProgress(progress - 1);
      }
    },
    [selectedTopic, progress]
  );

  const leccion = lecciones[currentPage];

  return (
    <>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={lecciones.length}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-10 place-items-center">
        {leccion.topics
          .filter((tema) => tema.title !== "")
          .map((tema) => (
            <a
              key={tema.ID + Math.random().toString(10).slice(2)}
              href={tema.url}
              target="_blank"
              className={`flex flex-col justify-center p-1 items-center border border-solid border-calendar_color_blue-300 cursor-pointer rounded-xl w-44 h-40 bg-whitesmoke-100 ${
                selectedTopic.includes(tema.ID) || tema.completed
                  ? "bg-calendar_color_blue-100"
                  : ""
              }`}
              onClick={() => handleTopicClick(tema.ID)}
              rel="noreferrer"
            >
              <h2 className="font-semibold text-center text-calendar_color_blue-500 mix-blend-normal">
                {tema.title}
              </h2>
              {tema.duration !== "" && <p>{tema.duration}</p>}
              {tema.completed && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-calendar_color_blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </a>
          ))}
      </div>
    </>
  );
};

export default Dias;
