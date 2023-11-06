import { useState } from "react";
import { IconArrowRight } from "./icons/IconArrowRight";
import { IconArrowLeft } from "./icons/IconArrowLeft";

export const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  // Crear un estado para la página de inicio
  const [startPageLarge, setStartPageLarge] = useState(0);
  const [startPageSmall, setStartPageSmall] = useState(0);

  const pageNumbers = [];
  for (
    let i = startPageLarge;
    i < Math.min(startPageLarge + 9, totalPages);
    i++
  ) {
    pageNumbers.push(i + 1);
  }

  const smallScreenPageNumbers = [];
  for (
    let i = startPageSmall;
    i < Math.min(startPageSmall + 3, totalPages);
    i++
  ) {
    smallScreenPageNumbers.push(i + 1);
  }
  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    if (currentPage - 1 < startPageLarge) {
      setStartPageLarge(startPageLarge - 9);
    }
    if (currentPage - 1 < startPageSmall) {
      setStartPageSmall(startPageSmall - 3);
    }
  };
  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    if (currentPage + 1 >= startPageLarge + 9) {
      setStartPageLarge(startPageLarge + 9);
    }
    if (currentPage + 1 >= startPageSmall + 3) {
      setStartPageSmall(startPageSmall + 3);
    }
  };
  return (
    <ol className="flex justify-center gap-1 mt-4 text-xs font-medium">
      <li>
        <button
          onClick={() => {
            handleClickPrev();
          }}
          disabled={currentPage === 0}
          className={`${currentPage === 0 ? 'text-calendar-btn-custom-gray pointer-events-none' : 'text-gray-900'} inline-flex h-10 w-14 items-center justify-center rounded border border-gray-100 bg-white rtl:rotate-180`}
        >
          <span className="sr-only">Prev Page</span>
          <IconArrowLeft />
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className="lg:block hidden">
          <button
            onClick={() => setCurrentPage(number - 1)}
            className={`flex items-center justify-center h-10 w-[5.5rem] text-base font-bold rounded border border-gray-100 text-center leading-8 ${
              currentPage === number - 1
                ? "bg-[#1a9596] text-white"
                : "bg-[#e0e0e0] text-gray-900"
            }`}
          >
            Dia {number}
          </button>
        </li>
      ))}
      {smallScreenPageNumbers.map((number) => (
        <li key={number} className="lg:hidden block">
          <button
            onClick={() => setCurrentPage(number - 1)}
            className={`flex items-center justify-center h-10 w-[5.5rem] text-base font-bold rounded border border-gray-100 text-center leading-8 ${
              currentPage === number - 1
                ? "bg-[#1a9596] text-white"
                : "bg-[#e0e0e0] text-gray-900"
            }`}
          >
            Dia {number}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            handleClickNext();
          }}
          disabled={currentPage === totalPages - 1}
          className={`${currentPage === totalPages - 1 ? 'text-calendar-btn-custom-gray pointer-events-none' : 'text-gray-900'} inline-flex h-10 w-14 items-center justify-center rounded border border-gray-100 bg-white rtl:rotate-180`}
        >
          <span className="sr-only">Next Page</span>
          <IconArrowRight />
        </button>
      </li>
    </ol>
  );
};
