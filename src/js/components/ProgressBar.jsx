import { useMemo } from "react";

const ProgressBar = ({ lecciones, totalTemas }) => {
  const temasCompletados = useMemo(() => {
    return lecciones.reduce(
      (total, leccion) =>
        total +
        (leccion.topics?.filter((topic) => topic.completed).length ?? 0),
      0
    );
  }, [lecciones]);
  
  const progressPercentage = Math.round((temasCompletados / totalTemas) * 100);
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] mb-2 text-mid font-black text-left">Progreso</div>
      <div className="w-[80%] overflow-hidden h-6 bg-[#e4f4f4] mb-2 border border-solid rounded-lg">
        <div
          className={`h-6 bg-[#00b7b5]  text-center text-sm rounded-s-lg font-bold ${progressPercentage === 0 ? 'text-[#00b7b5] ml-2' : 'text-white'}`}
          style={{ width: `${progressPercentage}%` }}
        >
          {`${progressPercentage}%`}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
