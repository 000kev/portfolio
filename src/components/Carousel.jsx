import { ChevronLeft, ChevronRight } from "react-feather";
import { useState } from "react";

export default function Carousel({onUpdate, children: slides }) {
  const [current, update] = useState(0);

  const prev = () =>
    {
      update((current) => (current === 0 ? slides.length - 1 : current - 1));
      if (current === 0) onUpdate(slides.length - 1);
      else onUpdate(current - 1);
    };
  const next = () =>
    {
      update((current) => (current === slides.length - 1 ? 0 : current + 1))
      if (current === slides.length - 1) onUpdate(0);
      else onUpdate(current + 1);
    };
  return (
    <>
      <div className="overflow-hidden w-2/5 h-2/5 mx-auto md:w-auto md:justify-between md:h-fit md:translate-x-0">
        <div
          className="flex transition-transform ease-out duration-500 md:items-center "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white opacity-80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </>
  );
}
